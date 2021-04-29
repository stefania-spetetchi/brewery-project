import { combineReducers } from "redux";
import BreweriesReducer from "./breweries-reducer";
import commentsReducer from "./comments-reducer";

const rootReducer = combineReducers({
  breweries: BreweriesReducer,
  comments: commentsReducer,
});

export default rootReducer;