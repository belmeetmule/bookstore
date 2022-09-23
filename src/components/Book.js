import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { id, title, author } = props;
  return (
    <li>
      <h2 style={{ marginBottom: 0, paddingBottom: 0 }}>
        {' '}
        {title}
        {' '}
      </h2>
      <p style={{ margin: 0, padding: 0 }}>
        {' '}
        {author}
        {' '}
      </p>
      <button id={id} type="button">Remove</button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
