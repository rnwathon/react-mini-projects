import clsx from 'clsx';
import * as React from 'react';

const List = ({ children, className, ...props }) => {
  const style = clsx('pixel-list', className);
  return (
    <ul className={style} {...props}>
      {children}
    </ul>
  );
};

const ListItem = ({ children, className, ...props }) => {
  const style = clsx(className);
  return (
    <li className={style} {...props}>
      {children}
    </li>
  );
};

List.Item = ListItem;

export default List;
