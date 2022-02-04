import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    basket: basketReducer,
    user: userReducer,
  },
});

export default store;
