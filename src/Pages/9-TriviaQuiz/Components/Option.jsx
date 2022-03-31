import clsx from 'clsx';
import * as React from 'react';

const Option = ({ id, children, className, ...props }) => {
  const style = clsx(
    'px-2 py-4',
    'grid items-center justify-center',
    'font-bold',
    'bg-white',
    'shadow-md',
    'rounded-md',
    'border',
    'cursor-pointer',
    'transition',
    'peer-checked:bg-violet-200 peer-checked:border-2 peer-checked:border-violet-500 peer-checked:shadow-none peer-checked:text-violet-700'
  );

  return (
    <label htmlFor={id}>
      <input id={id} type="radio" className="hidden peer" {...props} />
      <p className={style} dangerouslySetInnerHTML={{ __html: children }} />
    </label>
  );
};

export default Option;
