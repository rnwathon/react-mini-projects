import * as React from 'react';
import Author from './Components/Author';
import Quote from './Components/Quote';

const API_URL = 'http://api.quotable.io/random';

function RandomQuote() {
  const [quote, setQuote] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  /**
   * This is an antipattern,
   * to check if the component is still mounted
   * before state is updated (after fetching)
   * to prevent memory leaks.
   *
   * This is one of the reason that
   * it is recommended to seperate the component
   * from data fetching using useReducer or Redux
   *
   */
  const [isMounted, setIsMounted] = React.useState(true);

  React.useEffect(() => {
    getQuote();

    return () => setIsMounted(false);
  }, []);

  const getQuote = () => {
    setIsLoading(true);
    setQuote('');
    setAuthor('');
    fetch(API_URL, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        if (data && isMounted) {
          setIsLoading(false);
          setQuote(data.content);
          setAuthor(data.author);
        }
      });
  };

  return (
    <div className="bg-red-400 h-screen flex flex-col items-center justify-center p-5">
      <p className="text-center text-xl text-stone-900/50 mb-4 font-bold">Random Quote</p>
      <div className="w-full md:w-2/3 lg:w-1/3 min-h-[300px] bg-white rounded-xl shadow-lg px-5 pt-5 pb-20 relative">
        {isLoading ? (
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
