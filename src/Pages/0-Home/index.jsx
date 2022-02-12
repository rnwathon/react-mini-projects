import clsx from 'clsx';
import React from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

function Home() {
  const styles = {
    wrapper: clsx(['flex flex-col justify-between', 'min-h-screen']),
  };

  return (
    <div className={styles.wrapper}>
      <Header />

      <Footer />
    </div>
  );
}

export default Home;
