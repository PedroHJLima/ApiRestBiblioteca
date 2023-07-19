import React, { useState } from 'react'
import BookCard from './BookCard';

function FetchAPI(){

    const  [data, setData] =useState([]);

const apiGet = () => {
    fetch('http://127.0.0.1:3001/api/livros')
    .then(response => response.json())
    .then(json => {
        console.log(json)  
        setData(json)
    });

}
    return(
        <>
        <div className='cards-container'>
        Livros Existentes: <br />
  
        <button onClick={apiGet}>Buscar livros</button>
        </div>
        <br />
        
        <div className="cards-wrapper">
          {data.map((book) => (
            <BookCard
              key={book.isbn} // Usando book.isbn, pois é o identificador único do livro
            title={book.nome} // A propriedade "nome" contém o título do livro
            author={book.autorid} // Use a propriedade correta para o autor
            genre={book.genero} // Use a propriedade correta para o gênero
            description={book.descricao} // Use a propriedade correta para a descrição
          />
          ))}
        </div>
        </>
    );
}

export default FetchAPI