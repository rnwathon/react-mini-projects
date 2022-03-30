import clsx from 'clsx';
import * as React from 'react';

const Card = ({ children, className, ...props }) => {
  const style = clsx(
    'p-3',
    'bg-white',
    'shadow-lg',
    'rounded-md',
    'border',
    'transition',
    className
  );
  return (
    <div className={style} {...props}>
      {children}
    </div>
  );
};

export default Card;
