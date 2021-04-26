import { combineReducers } from "redux";
import BreweriesReducer from "./breweries-reducer";

const rootReducer = combineReducers({
  breweries: BreweriesReducer,
});

export default rootReducer;