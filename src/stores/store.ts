import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import modalReducer from './slice/modalSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
