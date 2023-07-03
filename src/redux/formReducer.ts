// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

export const formReducer = createSlice({
  name: "form",
  initialState: {
    formData: {},
    webFormData: {},
  },

  reducers: {
    setFormData: (state, action) => {
      return {
        ...state,
        formData: action.payload,
      };
    },
    setWebFormData: (state, action) => {
      return {
        ...state,
        webFormData: action.payload,
      };
    },
  },
});

export const { setFormData, setWebFormData } = formReducer.actions;

export default formReducer.reducer;
