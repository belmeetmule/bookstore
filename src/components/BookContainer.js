import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchBooks } from '../redux/books/api';

import BookList from './BookList';
import BookForm from './BookForm';

const BookContainer = () => {
  // get data from react state
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const books = useSelector((state) => state.books, shallowEqual);

  return (
    <>
      <section id="main-sec" className="f-col">
        <div id="books-list" className="f-col">
          {books.map((book) => (
            <BookList key={book.item_id} book={book} />
          ))}
        </div>
        <BookForm />
      </section>
    </>
  );
};

export default BookContainer;
