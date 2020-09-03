export const FETCH_PRODUCTS_PENDING = "FETCH_PRODUCTS_PENDING";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";

function fetchProductsPending() {
  return {
    type: FETCH_PRODUCTS_PENDING,
  };
}

function fetchProductsSuccess(data) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    data: data,
  };
}

function fetchProductsError(error) {
  return {
    type: FETCH_PRODUCTS_ERROR,
    error: error,
  };
}

// We perform an async task with the help of redux-thunk
// We break every response in different action so we can manage the
// errors/pending/result
export const asyncGet = (myAbortController) => {
  return (dispatch) => {
    dispatch(fetchProductsPending);
    fetch("http://manos.users.challenge.dev.monospacelabs.com/users", {
      signal: myAbortController.signal,
      method: "GET",
    })
      .then((res) => res.json())
      .then((item) => {
        if (item.error) {
          throw item.error;
        }

        dispatch(fetchProductsSuccess(item));
        return item;
      })
      .catch((err) => dispatch(fetchProductsError(err)));
  };
};
