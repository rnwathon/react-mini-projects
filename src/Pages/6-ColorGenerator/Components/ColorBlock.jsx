import * as React from 'react';

const ColorBlock = ({ rgb, weight, hex, type }) => {
  const rgbJoined = rgb.join(',');
  const hexValue = `#${hex.toUpperCase()}`;
  const [toast, setToast] = React.useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(hexValue);
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 1000);
  };
  return (
    <div
      className="w-36 h-24 px-4 py-2 relative rounded-xl flex flex-col justify-end items-end cursor-pointer transition-all active:transform active:scale-90"
      style={{
        background: `rgb(${rgbJoined})`,
        boxShadow: `0px 20px 20px -10px rgba(${rgbJoined}, 0.5)`,
        color: type === 'shade' ? 'white' : 'black',
      }}
      onClick={handleClick}
      aria-hidden="true"
    >
      <h6>{weight}%</h6>
      <p>{hexValue}</p>
      <div
        className={`absolute top-0 left-0 right-0 text-sm bg-zinc-900/10 px-2 py-1 rounded-t-xl transition-all ${
          toast ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Copied to clipboard
      </div>
    </div>
  );
};

export default ColorBlock;
