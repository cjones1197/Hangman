// Imported the configureStore function from the redux toolkit.
import { configureStore } from "@reduxjs/toolkit";
// Imported the reducers from account.js.
import wordReducer from "../Features/wordSlice";

//Exported configureStore and set it to respond to the reducers that have been created in wordSlice.js
export default configureStore({
    reducer: {
        word: wordReducer,
    },
}
);
