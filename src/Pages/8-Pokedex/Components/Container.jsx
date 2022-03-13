import clsx from 'clsx';
import * as React from 'react';

const Container = ({ children, className }) => {
  const style = clsx('pixel-container', className);

  return <div className={style}>{children}</div>;
};

const ContainerTitle = ({ children, className }) => {
  const style = clsx('pixel-container__title', className);
  return <h1 className={style}>{children}</h1>;
};

const ContainerContent = ({ children, className }) => {
  const style = clsx(className);
  return <div className={style}>{children}</div>;
};

Container.Title = ContainerTitle;
Container.Content = ContainerContent;

export default Container;
