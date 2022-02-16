import * as React from 'react';

function Quote(props) {
  const { quote } = props;
  return <div className="text-3xl font-serif italic mb-2">{`"${quote}"`}</div>;
}

export default Quote;
