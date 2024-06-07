import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Явно экспортируем RootState тип
export type RootState = ReturnType<typeof store.getState>;
export default store;