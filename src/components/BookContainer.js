import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from './BookList';
import BookForm from './BookForm';
import api from '../redux/books/api';

const BookContainer = () => {
  // get data from react state
  const books = useSelector((state) => state.books);
  console.log(books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(api.fetchBooks());
  }, []);

  return (
    <>
      <BookList books={books} />
      <BookForm />
    </>
  );
};

export default BookContainer;
