import * as React from 'react';
import Author from './Components/Author';
import Quote from './Components/Quote';

const API_URL = 'http://api.quotable.io/random';

function RandomQuote() {
  const [quote, setQuote] = React.useState('');
  const [author, setAuthor] = React.useState('');

  React.useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch(API_URL, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setQuote(data.content);
          setAuthor(data.author);
        }
      });
  };

  return (
    <div className="bg-red-400 h-screen flex flex-col items-center justify-center p-5">
      <p className="text-center text-xl text-stone-900/50 mb-4 font-bold">Random Quote</p>
      <div className="w-full md:w-2/3 lg:w-1/3 min-h-[300px] bg-white rounded-xl shadow-lg px-5 pt-5 pb-20 relative">
        {!quote || !author ? (
          <p>Loading...</p>
        ) : (
          <div>
            <Quote quote={quote} />
            <Author author={author} />
          </div>
        )}
        <button
          type="button"
          className="bg-red-500 text-white py-2 px-5 rounded-xl shadow-lg shadow-red-500/40 absolute left-5 bottom-5"
          onClick={getQuote}
        >
          Another One
        </button>
      </div>
    </div>
  );
}

export default RandomQuote;
