import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/api';

const BookList = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  const perc = Math.floor(Math.random() * 101);
  return (
    <div className="book flexd">

      <div className="book-info" id={book.item_id}>
        <div className="book-info-h">
          <h4>{ book.category }</h4>
          <h2>{ book.title }</h2>
          <h3>{ book.author }</h3>
        </div>
        <div className="book-info-actions flexd">
          <button type="button" className="axn-btn" id="comment">Comments</button>
          <div className="line-div" />
          <button
            type="button"
            className="axn-btn"
            id="remo"
            onClick={() => dispatch(removeBook(book.item_id))}
          >
            Remove
          </button>
          <div className="line-div" />
          <button type="button" className="axn-btn" id="edit">Edit</button>
        </div>
      </div>

      <div className="book-progress flexd">
        <CircularProgressbar value={perc} className="circ-progress" styles={buildStyles({ strokeLinecap: 'butt' })} />
        <div className="f-col">
          <h3 className="book-percentage">
            {perc}
            %
          </h3>
          <h4 className="book-completion">Completed</h4>
        </div>
      </div>
      <div className="line-p-div" />

      <div className="progression">
        <h3 className="book-chapter">Current Chapter</h3>
        <h2 className='className="book-chapter-number"'>
          Chapter &nbsp;
          {Math.floor(Math.random() * 60)}
        </h2>
        <button type="button" className="prog-btn">Update progress</button>
      </div>

    </div>
  );
};

BookList.propTypes = {
  book: PropTypes.string.isRequired,
};

export default BookList;
