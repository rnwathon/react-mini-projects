import * as React from 'react';

function Author(props) {
  const { author } = props;
  return <div className="text-slate-500 text-xl mb-2">{`- ${author}`}</div>;
}

export default Author;
