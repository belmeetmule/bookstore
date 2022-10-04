import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { target: { name, value } } = e;
    if (name === 'title') setTitle(value);
    else if (name === 'author') setAuthor(value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));

    // Sets back the input fields
    setAuthor('');
    setTitle('');
  };

  return (
    <>
      <h3 style={{ marginTop: '2rem' }}>ADD NEW BOOK</h3>
      <form onSubmit={handleSumbit} style={{ display: 'flex', gap: '2rem' }}>
        <input
          type="text"
          value={title}
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={author}
          placeholder="Author"
          name="author"
          onChange={handleChange}
        />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default BookForm;
