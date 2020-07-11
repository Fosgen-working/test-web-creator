import { createStore, combineReducers } from "redux";
import galleryPageReducer from "./galleryPageReducer";
import formsReducer from "./formsReducer";

let reducers = combineReducers({
    galleryPage: galleryPageReducer,
    formsText: formsReducer
});

let store = createStore(reducers);

export default store;