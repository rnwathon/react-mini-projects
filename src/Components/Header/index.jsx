import clsx from 'clsx';
import React from 'react';

function Header() {
  const styles = {
    header: clsx([
      'flex justify-center items-center',
      'bg-[#282c34] text-[#61dafb]',
      'h-[300px]',
      'mb-5',
    ]),
    title: clsx('text-xl font-bold tracking-widest'),
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>React Mini Projects</h1>
    </header>
  );
}

export default Header;
