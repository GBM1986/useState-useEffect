import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Counter from './components/Counter.jsx';
import Greeting from './components/Greeting.jsx';

function App() {

  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="counter" element={<Counter />}/>
          <Route path="greeting" element={<Greeting />}/>
        </Routes>
      </div>
  )
}

export default App
