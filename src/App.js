import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/0-Home';
import PersonList from './Pages/1-PersonList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/1-PersonList" element={<PersonList />} />
    </Routes>
  );
}

export default App;
