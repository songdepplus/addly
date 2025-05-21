import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;