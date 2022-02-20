import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/0-Home';
import PersonList from './Pages/1-PersonList';
import RandomQuote from './Pages/2-RandomQuote';
import Carousel from './Pages/3-Carousel';
import FAQ from './Pages/4-FAQ';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/1-PersonList" element={<PersonList />} />
      <Route path="/2-RandomQuote" element={<RandomQuote />} />
      <Route path="/3-Carousel" element={<Carousel />} />
      <Route path="/4-FAQ" element={<FAQ />} />
    </Routes>
  );
}

export default App;
