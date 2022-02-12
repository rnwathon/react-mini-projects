import React from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />

      <Footer />
    </div>
  );
}

export default Home;
