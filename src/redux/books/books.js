// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const initialState = [
  {
    id: '',
    title: 'The Hunger Games',
    author: 'Suzan Collins',
  },
  {
    id: '2',
    title: 'Harry Potter',
    author: 'J.K.Rowling',
  },
  {
    id: '3',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
  },
];

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state.filter(({ id }) => id !== action.bookId)];
    default:
      return state;
  }
};

// Action creators
export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

export default booksReducer;