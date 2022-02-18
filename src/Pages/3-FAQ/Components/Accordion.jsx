import * as React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Accordion(props) {
  const { info, title } = props;
  const [showDetail, setShowDetail] = React.useState(false);
  return (
    <div
      className={`rounded-lg w-full mb-4 transition-all ${
        showDetail ? 'shadow-xl' : 'shadow-md'
      }`}
    >
      <header className="flex justify-between p-3">
        <h2 className="font-bold">{title}</h2>
        <button type="button" onClick={() => setShowDetail(!showDetail)}>
          {showDetail ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </header>
      {showDetail && <article className="p-3">{info}</article>}
    </div>
  );
}

export default Accordion;
