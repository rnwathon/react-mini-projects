import clsx from 'clsx';
import * as React from 'react';

const Progress = ({ value, max, className, ...props }) => {
  const style = clsx('pixel-progress', className);
  return <progress value={value} max={max} className={style} {...props} />;
};

export default Progress;
