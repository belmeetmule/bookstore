import React from 'react';

const BookForm = () => (
  <>
    <h3 style={{ marginTop: '2rem' }}>ADD NEW BOOK</h3>
    <form style={{ display: 'flex', gap: '2rem' }}>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Author" />
      <button type="button">Add Book</button>
    </form>
  </>
);

export default BookForm;
