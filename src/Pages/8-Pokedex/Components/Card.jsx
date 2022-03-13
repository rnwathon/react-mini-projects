import clsx from 'clsx';
import * as React from 'react';

const Card = ({ children, className, ...props }) => {
  const style = clsx('pixel-card', className);
  return (
    <div className={style} {...props}>
      {children}
    </div>
  );
};

export default Card;
