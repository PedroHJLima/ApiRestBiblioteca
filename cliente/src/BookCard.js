import React from 'react';

const BookCard = ({ title, author, genre, description }) => {
  return (
    <div className="card">
      <h3 className="titulo">{title}</h3>
      <p>Autor: {author}</p>
      <p>Gênero: {genre}</p>
      <p>Descrição: {description}</p>
    </div>
  );
};

export default BookCard;