const STATUS = 'bookstore/categories/STATUS';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({ type: STATUS });

export default categoriesReducer;
