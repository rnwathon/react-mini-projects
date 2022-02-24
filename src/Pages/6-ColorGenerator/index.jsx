import * as React from 'react';
import Values from 'values.js';
import ColorBlock from './Components/ColorBlock';

function ColorGenerator() {
  const [colorInput, setColorInput] = React.useState('');
  const [colors, setColors] = React.useState({
    base: [],
    tint: [],
    shade: [],
  });

  const generateColor = React.useCallback((hex) => {
    const colorValues = new Values(hex).all(10);
    const generatedColors = {
      base: [],
      tint: [],
      shade: [],
    };

    colorValues.forEach((color) => {
      if (color.type === 'tint') generatedColors.tint.push(color);
      if (color.type === 'base') generatedColors.base.push(color);
      if (color.type === 'shade') generatedColors.shade.push(color);
    });

    generatedColors.tint = generatedColors.tint.reverse();

    setColors(generatedColors);
  }, []);

  React.useEffect(() => {
    generateColor('#CC2874');
  }, [generateColor]);

  return (
    <div className="bg-zinc-100 min-h-screen p-5">
      <div className="flex align-center gap-5 mb-5">
        <div>
          <h1 className="text-2xl font-bold"> Color Generator </h1>
          <p className="text-sm">Get the Tint & Shade of your color</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="px-4 py-2 border rounded-lg shadow-lg outline-none"
            placeholder="#CC2874"
            onChange={(e) => setColorInput(e.target.value)}
          />
          <button
            type="button"
            className="bg-zinc-100 shadow-lg hover:bg-zinc-100 hover:shadow-xl active:shadow-lg border transition-all px-4 py-2 rounded-lg font-bold"
            onClick={(e) => {
              e.preventDefault();
              generateColor(colorInput);
            }}
          >
            Generate
          </button>
        </div>
      </div>

      <hr />

      <h2 className="text-lg font-bold">Base</h2>
      <div className="flex gap-2 flex-wrap mb-4">
        {colors?.base?.map((baseColor) => (
          <ColorBlock key={baseColor.hex} {...baseColor} hex={baseColor.hex} />
        ))}
      </div>

      <h2 className="text-lg font-bold">Tint</h2>
      <div className="flex gap-2 flex-wrap mb-4">
        {colors?.tint?.map((tintColor) => (
          <ColorBlock key={tintColor.hex} {...tintColor} hex={tintColor.hex} />
        ))}
      </div>

      <h2 className="text-lg font-bold">Shade</h2>
      <div className="flex gap-2 flex-wrap mb-4">
        {colors?.shade?.map((shadeColor) => (
          <ColorBlock key={shadeColor.hex} {...shadeColor} hex={shadeColor.hex} />
        ))}
      </div>
    </div>
  );
}

export default ColorGenerator;
