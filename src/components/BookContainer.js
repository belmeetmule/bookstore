import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BooksList from './BookList';
import BookForm from './BookForm';
import { getBooks } from '../redux/books/books';

const BookContainer = () => {
  // get data from react state
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <>
      <BooksList books={books} />
      <BookForm />
    </>
  );
};

export default BookContainer;
