import clsx from 'clsx';
import * as React from 'react';

const Button = ({ children, color, className, ...props }) => {
  const btnColor =
    color === 'primary' ? 'is-primary' : color === 'danger' ? 'is-danger' : '';
  const style = clsx('pixel-btn', btnColor, className);
  return (
    <button type="button" className={style} {...props}>
      {children}
    </button>
  );
};

export default Button;
