const STATUS_CHECKED = 'STATUS_CHECKED';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case STATUS_CHECKED:
      return 'Under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({ type: STATUS_CHECKED });

export default categoriesReducer;
