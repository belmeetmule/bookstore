import api from '../../api';

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

// Action creators
export const addBook = (book) => async (dispatch) => {
  api.addNewBook(book);
  dispatch({ type: ADD_BOOK, book });
};

export const removeBook = (bookId) => async (dispatch) => {
  api.removeBook(bookId);
  dispatch({ type: REMOVE_BOOK, bookId });
};

export const getBooks = () => async (dispatch) => {
  const books = await api.fetchBooks();
  dispatch({ type: GET_BOOKS, books });
};

// Reducer
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state.filter(({ id }) => id !== action.bookId)];
    case GET_BOOKS:
      return action.books;
    default:
      return state;
  }
};

export default booksReducer;
