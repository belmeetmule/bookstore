// Actions
export const ADD_BOOK = 'bookstore/books/ADD_BOOK';
export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
export const GET_BOOKS = 'bookstore/books/GET_BOOKS';

export const GETBOOKS = (dispatch) => {
  dispatch({ type: GET_BOOKS, books: [] });
};

export const ADDBOOK = (dispatch, book) => {
  dispatch({ type: ADD_BOOK, book });
};

export const REMOVEBOOK = (dispatch, bookId) => {
  dispatch({ type: REMOVE_BOOK, bookId });
};

// Reducer
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload];
    case `${REMOVE_BOOK}/fulfilled`:
      return [...state.filter(({ id }) => id !== action.bookId)];
    case `${GET_BOOKS}/fulfilled`:
      return [...action.payload];
    default:
      return state;
  }
};

export default booksReducer;
