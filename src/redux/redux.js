import { createStore, combineReducers } from "redux";
import galleryPageReducer from "./galleryPageReducer";

let reducers = combineReducers({
    galleryPage: galleryPageReducer
});

let store = createStore(reducers);

export default store;