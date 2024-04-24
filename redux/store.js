// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartReducer from "./cartSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  // andere reducers hier toevoegen
});

export const store = configureStore({
  reducer: rootReducer,
});
