import { configureStore } from "@reduxjs/toolkit";

import notesReducer from "./note/noteSlice";
import modalReducer from "./note/modalSlice";

export default configureStore({
  reducer: {
    notes: notesReducer,
    modal: modalReducer
  },
});