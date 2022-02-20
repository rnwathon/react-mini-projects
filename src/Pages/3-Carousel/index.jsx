import * as React from 'react';
import data from './data';
import Slider from './Components/Slider';

function Carousel() {
  return (
    <div className="bg-green-400 h-screen flex flex-col items-center justify-center p-5">
      <Slider>
        {data.map((d, idx) => (
          <Slider.Item key={`slider-item-${idx}`}>
            <div className="flex flex-col min-w-full p-5 text-center">
              <img
                src={d.image}
                alt="avatar"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h2 className="text-3xl font-bold mb-4">{d.name}</h2>
              <p className="w-full md:w-1/2 mx-auto">{d.text}</p>
            </div>
          </Slider.Item>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
