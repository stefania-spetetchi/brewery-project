import { FETCH_BREWERY } from "../actions";

const breweryReducer = function (state = [], action) {

  switch (action.type) {
    case FETCH_BREWERY:
      return action.payload.map(function (b) {
        return {
          name: b.name || ''
        }
      });
    default: return state;
  }
}

export default breweryReducer;