import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./Reducer/notesSlice";

const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});

export default store;
