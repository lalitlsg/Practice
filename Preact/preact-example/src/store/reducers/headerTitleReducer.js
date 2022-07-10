import { actionTypes } from "../actions";

const initialState = "Select Option";

const headerTitleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TITLE:
      return action.payload;
    default:
      return state;
  }
};

export default headerTitleReducer;
