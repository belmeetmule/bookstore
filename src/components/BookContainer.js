import React from 'react';
import BooksList from './BookList';
import BookForm from './BookForm';

const BookContainer = () => {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzzane Collins',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      title: 'Capital in the twenty-first century',
      author: 'Suzzane Collins',
    },
  ];

  return (
    <>
      <BooksList books={books} />
      <BookForm />
    </>
  );
};

export default BookContainer;
