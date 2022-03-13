import clsx from 'clsx';
import * as React from 'react';

const Card = ({ children, className }) => {
  const style = clsx('pixel-card', className);
  return <div className={style}>{children}</div>;
};

export default Card;
