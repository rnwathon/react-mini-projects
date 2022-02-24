import * as React from 'react';

function ColorGenerator() {
  return (
    <div className="bg-zinc-100 min-h-screen p-5">
      <div className="flex align-center gap-5 mb-5">
        <div>
          <h1 className="text-2xl font-bold"> Color Generator </h1>
          <p className="text-sm">Get the Tint & Shade of your color</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            className="px-4 py-2 border rounded-lg shadow-lg outline-none"
            placeholder="#CC2874"
          />
          <button
            type="button"
            className="bg-zinc-100 shadow-lg hover:bg-zinc-100 hover:shadow-xl border transition-all px-4 py-2 rounded-lg font-bold"
          >
            Generate
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ColorGenerator;
