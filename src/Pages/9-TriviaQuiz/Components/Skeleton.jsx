import clsx from 'clsx';
import * as React from 'react';

const Skeleton = ({ className, ...props }) => (
  <div className={clsx('h-2 bg-slate-200 rounded animate-pulse', className)} {...props} />
);

export default Skeleton;
