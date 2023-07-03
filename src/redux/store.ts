import { combineReducers, configureStore } from "@reduxjs/toolkit";
import formReducer from "../redux/formReducer";

const rootReducer = combineReducers({
  form: formReducer,
});

export default configureStore({ reducer: rootReducer });
