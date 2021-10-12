import { createStore } from "redux";
import rootReducer from "../Reducer";
import userReducer from "../Reducer/reducer";

const store = createStore(userReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
