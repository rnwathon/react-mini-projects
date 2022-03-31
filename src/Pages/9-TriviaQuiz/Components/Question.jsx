import clsx from 'clsx';
import * as React from 'react';

const Question = ({ children, className, ...props }) => {
  const style = clsx(
    'px-4 py-8',
    'grid items-center justify-center',
    'text-xl text-violet-700',
    'bg-white',
    'shadow-lg',
    'rounded-md',
    'border',
    'transition',
    className
  );
  return (
    <div className={style} {...props} dangerouslySetInnerHTML={{ __html: children }} />
  );
};

export default Question;
