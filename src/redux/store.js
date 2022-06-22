import { configureStore } from '@reduxjs/toolkit';
import SignInReducer from "./slices/signin.slice";

export const store = configureStore({
  reducer: {
    SignIn: SignInReducer,
  },
});
