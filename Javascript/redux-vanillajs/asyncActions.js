const redux = require('redux');
const reduxThunk = require('redux-thunk').default;
const axios = require('axios');

// initial state
const initialState = {
  loading: false,
  data: [],
  error: '',
};

// actions
const REQUEST_USER = 'REQUEST_USER';
const REQUEST_USER_SUCCESS = 'REQUEST_USER_SUCCESS';
const REQUEST_USER_FAIL = 'REQUEST_USER_FAIL';

// action creator

const requestUser = () => {
  return {
    type: REQUEST_USER,
  };
};

const requestUserSuccess = (data) => {
  return {
    type: REQUEST_USER_SUCCESS,
    payload: data,
  };
};

const requestUserFail = (error) => {
  return {
    type: REQUEST_USER_FAIL,
    error: error,
  };
};

const fetchUser = () => {
  return (dispatch) => {
    dispatch(requestUser());
    axios
      .get('https://jsonplaceholder.typicoe.com/users')
      .then((response) => {
        const users = response.data.map((u) => u.name);
        dispatch(requestUserSuccess(users));
      })
      .catch((error) => {
        dispatch(requestUserFail(error.message));
      });
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USER: {
      return {
        ...state,
        loading: true,
      };
    }
    case REQUEST_USER_SUCCESS: {
      return {
        ...state,
        loading: false, 
        data: action.payload,
      };
    }
    case REQUEST_USER_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

const store = redux.createStore(reducer, redux.applyMiddleware(reduxThunk));
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUser());