// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface CartItem {
//   id: string;
//   name: string;
//   weight: string;
//   price: number;
//   quantity: number;
//   totalPrice: number;
// }

// interface CartState {
//   items: CartItem[];
//   totalAmount: number;
// }

// const initialState: CartState = {
//   items: [],
//   totalAmount: 0,
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addItemToCart(state, action: PayloadAction<{ id: string; name: string; weight: string; price: number }>) {
//       const newItem = action.payload;
//       const existingItem = state.items.find(item => item.id === newItem.id && item.weight === newItem.weight);
//       if (existingItem) {
//         existingItem.quantity += 1;
//         existingItem.totalPrice += newItem.price;
//       } else {
//         state.items.push({
//           ...newItem,
//           quantity: 1,
//           totalPrice: newItem.price,
//         });
//       }
//       state.totalAmount += newItem.price;
//     },
//     // Дополнительные редюсеры можно добавить здесь
//   },
// });

// export const { addItemToCart } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store'; // Предположим, что вы правильно экспортируете RootState из store.ts

interface CartItem {
  id: string;
  name: string;
  weight: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<{ id: string; name: string; weight: string; price: number }>) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id && item.weight === newItem.weight);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      state.totalAmount += newItem.price;
    },
    // Дополнительные редюсеры можно добавить здесь
  },
});

export const { addItemToCart } = cartSlice.actions;

export const selectCartTotal = (state: RootState) => state.cart.totalAmount;

export default cartSlice.reducer;