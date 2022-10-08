import { createAsyncThunk } from '@reduxjs/toolkit';
/* eslint-disable-next-line import/no-cycle */
import { ADD_BOOK, REMOVE_BOOK } from './books';

const GET_BOOKS = 'bookstore/books/GET_BOOKS';
const appId = 'LpS0hST1DeFrx6DWsQyI';
const baseURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books/`;

const api = {
  // get books from the endpoint
  fetchBooks: createAsyncThunk(
    GET_BOOKS,
    async () => {
      const response = await fetch(baseURL);
      const data = await response.json();

      const books = Object.entries(data)
        .map(([id, book]) => {
          const { title, author } = book[0];
          return { id, title, author };
        })
        .sort((a, b) => a.title.localeCompare(b.title));

      return books;
    },
  ),

  // Add new book to the endpoint
  addNewBook: createAsyncThunk(
    ADD_BOOK,
    async ({
      id, title, author, category,
    }) => {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: id,
          title,
          author,
          category,
        }),
      };
      await fetch(baseURL, options).then((res) => {
        if (res.status !== 201) { console.log('Add book operation is not successfull'); }
      });
    },
  ),

  // remove book from the endpoint
  removeBook: createAsyncThunk(
    REMOVE_BOOK,
    async (bookId) => {
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: bookId,
        }),
      };

      fetch(baseURL + bookId, options)
        .then((res) => {
          if (res.status !== 201) { console.log('delete operation is not successfull'); }
        });
    },
  ),
};

export default api;
