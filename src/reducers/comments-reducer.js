import { ADD_COMMENT } from "../actions";

const initialState = []

const commentsReducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];
    default: return state;
  }
}

export default commentsReducer;