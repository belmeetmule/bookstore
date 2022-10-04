import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleCheckStatus = () => dispatch(checkStatus());

  return (
    <>
      <h3>
        {' '}
        {status}
        {' '}
      </h3>
      <button
        type="button"
        onClick={handleCheckStatus}
      >
        Check Status
      </button>

    </>
  );
};

export default Categories;
