import clsx from 'clsx';
import * as React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const AccordionContext = React.createContext();

const Accordion = ({ children }) => {
  const [activeContent, setActiveContent] = React.useState(null);

  const toggleShowContent = React.useCallback(
    (itemId) => {
      if (itemId === activeContent) return setActiveContent(null);

      setActiveContent(itemId);
    },
    [activeContent]
  );

  return (
    <AccordionContext.Provider
      value={React.useMemo(
        () => ({ activeContent, toggleShowContent }),
        [activeContent, toggleShowContent]
      )}
    >
      {children}
    </AccordionContext.Provider>
  );
};

const AccordionItemContext = React.createContext();

const AccordionItem = ({ children, id }) => {
  const style = clsx(
    'rounded-lg w-full mb-4',
    'ease-in-out duration-500',
    'shadow-md border border-slate-100'
  );

  return (
    <AccordionItemContext.Provider value={React.useMemo(() => ({ id }), [id])}>
      <div className={style}>{children}</div>
    </AccordionItemContext.Provider>
  );
};

const Header = ({ children }) => {
  const { toggleShowContent, activeContent } = React.useContext(AccordionContext);
  const { id } = React.useContext(AccordionItemContext);

  const style = clsx('flex justify-between p-3 cursor-pointer');
  return (
    <header className={style} onClick={() => toggleShowContent(id)} aria-hidden="true">
      <h2 className="font-bold">{children}</h2>
      <button type="button">
        {activeContent === id ? <FaChevronUp /> : <FaChevronDown />}
      </button>
    </header>
  );
};

const Content = ({ children }) => {
  const { activeContent } = React.useContext(AccordionContext);
  const { id } = React.useContext(AccordionItemContext);
  const contentEl = React.useRef(null);

  const style = clsx('overflow-hidden transition-all duration-500 px-3');

  return (
    <article
      ref={contentEl}
      className={style}
      style={{
        maxHeight: activeContent === id ? `${contentEl?.current?.scrollHeight}px` : 0,
      }}
    >
      {children}
    </article>
  );
};

Accordion.Item = AccordionItem;
Accordion.ItemHeader = Header;
Accordion.ItemContent = Content;

export default Accordion;
