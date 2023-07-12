import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Livros() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get('http://localhost:3001/api/livros');
      setLivros(response.data);
    } catch (error) {
      console.error('Erro:', error);
    }
  }

  return (
    <div>
      {livros.length > 0 ? (
        <ul>
          {livros.map(livro => (
            <li key={livro.id}>{livro.titulo}</li>
          ))}
        </ul>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default Livros;
