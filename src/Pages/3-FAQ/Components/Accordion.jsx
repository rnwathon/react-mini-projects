import clsx from 'clsx';
import * as React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Accordion(props) {
  const { info, title } = props;
  const [showDetail, setShowDetail] = React.useState(false);

  const style = {
    wrapper: clsx(
      'rounded-lg w-full mb-4',
      'ease-in-out duration-500',
      showDetail ? 'shadow-xl' : 'shadow-md'
    ),
    content: clsx(
      'px-3',
      'overflow-hidden',
      'ease-in-out duration-500',
      showDetail ? 'max-h-[500px] py-3' : 'max-h-0'
    ),
  };

  return (
    <div className={style.wrapper}>
      <header className="flex justify-between p-3">
        <h2 className="font-bold">{title}</h2>
        <button type="button" onClick={() => setShowDetail(!showDetail)}>
          {showDetail ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </header>
      <article className={style.content}>{info}</article>
    </div>
  );
}

export default Accordion;
