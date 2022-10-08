import { createAsyncThunk } from '@reduxjs/toolkit';

const appId = 'LpS0hST1DeFrx6DWsQyI';
const baseURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books/`;

const GET_BOOKS = 'bookstore/books/GET_BOOKS';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const fetchBooks = createAsyncThunk(
  GET_BOOKS,
  async () => {
    const response = await fetch(baseURL);
    const data = await response.json();
    return data;
  },
);

const addBook = createAsyncThunk(
  ADD_BOOK,
  async (book) => {
    await fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  },
);

const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async (bookid) => {
    await fetch(`baseURL/${bookid}`, {
      method: 'DELETE',
    });
  },
);

export {
  GET_BOOKS, ADD_BOOK, REMOVE_BOOK, fetchBooks, addBook, removeBook,
};
