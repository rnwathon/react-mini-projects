import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/0-Home';
import PersonList from './Pages/1-PersonList';
import RandomQuote from './Pages/2-RandomQuote';
import Carousel from './Pages/3-Carousel';
import FAQ from './Pages/4-FAQ';
import InfiniteScroll from './Pages/5-InfiniteScroll';
import ColorGenerator from './Pages/6-ColorGenerator';
import TodoList from './Pages/7-TodoList';
import Pokedex from './Pages/8-Pokedex';
import TriviaQuiz from './Pages/9-TriviaQuiz';

function App() {
  return (
    <Routes path="/react-mini-projects">
      <Route path="/" element={<Home />} />
      <Route path="/1-PersonList" element={<PersonList />} />
      <Route path="/2-RandomQuote" element={<RandomQuote />} />
      <Route path="/3-Carousel" element={<Carousel />} />
      <Route path="/4-FAQ" element={<FAQ />} />
      <Route path="/5-InfiniteScroll" element={<InfiniteScroll />} />
      <Route path="/6-ColorGenerator" element={<ColorGenerator />} />
      <Route path="/7-TodoList" element={<TodoList />} />
      <Route path="/8-Pokedex" element={<Pokedex />} />
      <Route path="/9-TriviaQuiz" element={<TriviaQuiz />} />
    </Routes>
  );
}

export default App;
