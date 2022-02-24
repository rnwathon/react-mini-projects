import * as React from 'react';

const ColorBlock = ({ rgb, weight, hex, type }) => {
  const rgbJoined = rgb.join(',');
  return (
    <div
      className="w-36 h-24 px-4 py-2 rounded-xl flex flex-col justify-end items-end"
      style={{
        background: `rgb(${rgbJoined})`,
        boxShadow: `0px 20px 20px -10px rgba(${rgbJoined}, 0.5)`,
        color: type === 'shade' ? 'white' : 'black',
      }}
    >
      <h6>{weight}%</h6>
      <p>#{hex.toUpperCase()}</p>
    </div>
  );
};

export default ColorBlock;
