import * as React from 'react';
import API_KEY from './key';
import Card from './Components/Card';

const API_URL = 'https://api.pexels.com/v1/curated?per_page=5';

function InfiniteScroll() {
  const [photos, setPhotos] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const loader = React.useRef(null);

  const getPhotos = React.useCallback(
    async (url) => {
      setLoading(true);
      setError('');
      setTimeout(async () => {
        try {
          if (page > 0) {
            const response = await fetch(`${API_URL}&page=${page}`, {
              method: 'GET',
              headers: { Authorization: API_KEY },
            });
            const result = await response.json();
            setLoading(false);
            if (result?.photos && result?.next_page) {
              setPhotos((prevPhotos) => [...prevPhotos, ...result.photos]);
            }

            if (result.error) setError(result.error);
          }
        } catch (err) {
          console.log(err.message);
        }
      }, 1000);
    },
    [page]
  );

  const handleObserver = React.useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  }, []);

  React.useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  React.useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <div className="bg-zinc-900 min-h-screen p-5 text-center text-white">
      <h1 className="text-lg text-white text-5xl tracking-wide">Infinite Scroll</h1>
      <p>
        {' '}
        Photos from{' '}
        <a
          href="https://www.pexels.com/"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-rose-500"
        >
          Pexels.com
        </a>
      </p>
      <br />
      <hr className="w-10 mx-auto" />
      <br />
      {photos.map((photo) => (
        <Card
          key={photo?.id}
          img={photo?.src?.large}
          alt={photo?.alt}
          photographer={photo?.photographer}
          photographerUrl={photo?.photographer_url}
          avgColor={photo?.avg_color}
        />
      ))}
      {loading && <h5 className="text-white">Loading...</h5>}
      {error && <h5 className="text-red-500">{error}</h5>}
      <div ref={loader} />
    </div>
  );
}

export default InfiniteScroll;
