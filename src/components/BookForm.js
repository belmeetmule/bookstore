import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/api';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { target: { name, value } } = e;
    if (name === 'title') setTitle(value);
    else if (name === 'author') setAuthor(value);
    else if (name === 'category') setCategory(value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };
    // dispatch the addBook action creator method
    dispatch(addBook(newBook));

    // clear the imput fields
    setAuthor('');
    setTitle('');
    setCategory('');
  };

  return (
    <>
      <div id="add-div" className="f-col">
        <div className="add-book-line-div" />
        <h2>ADD NEW BOOK</h2>
        <form id="add-book-form" onSubmit={handleSumbit} className="flexd">
          <input
            id="book-title"
            type="text"
            value={title}
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
          <input
            id="book-author"
            type="text"
            value={author}
            placeholder="Author"
            name="author"
            onChange={handleChange}
          />
          <select
            id="form-categ"
            name="category"
            value={category}
            onChange={handleChange}
            required
          >
            <option value="">Category</option>
            <option value="Biography">Biography</option>
            <option value="Fiction">Fiction</option>
            <option value="History">History</option>
            <option value="Poetry">Poetry</option>

          </select>
          <button
            className="add-book-btn"
            type="submit"
          >
            Add Book
          </button>
        </form>
      </div>
    </>
  );
};

export default BookForm;
