import { GET_BOOKS, ADD_BOOK, REMOVE_BOOK } from './api';

// Action creators section
export const addBook = (book) => ({
  type: ADD_BOOK, book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK, book,
});

// Reducer
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return state.concat(action.meta.arg);
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.item_id !== action.meta.arg);
    case `${GET_BOOKS}/fulfilled`:
      return (
        Object.keys(action.payload).map((key) => {
          const {
            title,
            author,
            category,
          } = action.payload[key][0];
          return ({
            item_id: key,
            title,
            author,
            category,
          });
        })
      );
    default:
      return state;
  }
};

export default booksReducer;
