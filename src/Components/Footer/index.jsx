import clsx from 'clsx';
import React from 'react';

function Footer() {
  const styles = {
    footer: clsx([
      'flex justify-center items-center',
      'bg-[#282c34] text-[#61dafb]',
      'h-[75px]',
      'mt-5',
    ]),
    title: clsx('tracking-widest'),
  };

  return (
    <footer className={styles.footer}>
      <p className={styles.title}>Made with 🥤</p>
    </footer>
  );
}

export default Footer;
