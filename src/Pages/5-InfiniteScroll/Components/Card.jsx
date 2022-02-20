import * as React from 'react';

const Card = ({ img, alt, photographer, photographerUrl, avgColor }) => (
  <div className="border border-zinc-700 mx-auto w-[500px] mb-5">
    <img className="w-full" src={img} alt={alt} />
    <div className="flex justify-between p-3">
      <h2 className="text-zinc-100">
        by{' '}
        <a
          href={photographerUrl}
          target="_blank"
          className="font-bold text-rose-500"
          rel="noreferrer"
        >
          {photographer}
        </a>
      </h2>
      <div className="w-5 h-5 rounded-full" style={{ background: avgColor }} />
    </div>
  </div>
);

export default Card;
