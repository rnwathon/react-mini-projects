import * as React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Slider = ({ children }) => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const slideRef = React.useRef(null);
  const data = React.useMemo(() => React.Children.toArray(children), [children]);

  React.useEffect(() => {
    const slideEl = slideRef.current;
    const translateValue = `${activeSlide * -100}%`;
    if (slideEl) slideEl.style.transform = `translateX(${translateValue})`;
  }, [activeSlide]);

  const onClickPrevious = () => {
    const activeVal = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
    setActiveSlide(activeVal);
  };

  const onClickNext = () => {
    const activeVal = activeSlide + 1 > data.length - 1 ? 0 : activeSlide + 1;
    setActiveSlide(activeVal);
  };

  return (
    <div className="bg-white w-full sm:w-2/3 md:w-1/2 rounded-xl p-5 relative text-center overflow-hidden">
      <div className="flex w-full transition-all duration-300 ease-in-out" ref={slideRef}>
        {children}
      </div>
      <PreviousBtn onClick={onClickPrevious} />
      <NextBtn onClick={onClickNext} />
    </div>
  );
};

const SliderItem = ({ children }) => children;

const PreviousBtn = ({ onClick }) => (
  <button
    type="button"
    className="transition-all duration-500 hover:bg-green-100 h-fit p-2 rounded-md absolute inset-y-1/2 left-1"
    onClick={onClick}
  >
    <FaChevronLeft className="text-sm" />
  </button>
);

const NextBtn = ({ onClick }) => (
  <button
    type="button"
    className="transition-all duration-500 hover:bg-green-100 h-fit p-2 rounded-md absolute inset-y-1/2 right-1"
    onClick={onClick}
  >
    <FaChevronRight className="text-sm" />
  </button>
);

Slider.Item = SliderItem;

export default Slider;
