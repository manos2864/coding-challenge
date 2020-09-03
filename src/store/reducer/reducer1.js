import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS,
} from "../action/action1";

const initialState = {
  data: [],
  isFetching: false,
  lastUpdate: null,
  error: null,
};

const reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        data: action.data,
        isFetching: false,
        lastUpdate: new Date().toLocaleString(),
        error: null,
      };
    default:
      return state;
  }
};

export default reducer1;
