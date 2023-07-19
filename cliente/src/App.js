import React from 'react';
import './App.css';
import FetchAPI from './FetchApi';
import Menu from './menu';

function App() {
  return (
    <>
    <Menu></Menu>
    
    <div className="Livro">
      <FetchAPI />
    </div>

    </>
  );
}

export default App;
