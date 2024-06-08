// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from './store'; // Предположим, что вы правильно экспортируете RootState из store.ts

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
//     minusItemToCart(state, action: PayloadAction<{ id: string; name: string; weight: string; price: number }>) {
//       const newItem = action.payload;
//       const existingItemIndex = state.items.findIndex(item => item.id === newItem.id && item.weight === newItem.weight);
    
//       if (existingItemIndex !== -1) {
//         const existingItem = state.items[existingItemIndex];
//         if (existingItem.quantity > 1) {
//           existingItem.quantity -= 1;
//           existingItem.totalPrice -= newItem.price; 
//         } else {
         
//           state.items.splice(existingItemIndex, 1);
//         }
//         state.totalAmount -= newItem.price; 
//       }
//     },
//   },
// });

// export const { addItemToCart, minusItemToCart } = cartSlice.actions;

// export const selectCartTotal = (state: RootState) => state.cart.totalAmount;

// export default cartSlice.reducer;


import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

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
    minusItemToCart(state, action: PayloadAction<{ id: string; name: string; weight: string; price: number }>) {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === newItem.id && item.weight === newItem.weight);
    
      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          existingItem.totalPrice -= newItem.price; // Уменьшаем общую цену на цену одной единицы товара
        } else {
          // Убираем товар из корзины, если количество стало нулевым
          state.items.splice(existingItemIndex, 1);
        }
        state.totalAmount -= newItem.price; // Уменьшаем общую сумму корзины на цену одной единицы товара
      }
    },
    incrementQuantity(state, action: PayloadAction<{ id: string; weight: string }>) {
      const existingItem = state.items.find(item => item.id === action.payload.id && item.weight === action.payload.weight);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += existingItem.price;
        state.totalAmount += existingItem.price;
      }
    },
    decrementQuantity(state, action: PayloadAction<{ id: string; weight: string }>) {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id && item.weight === action.payload.weight);
      if (existingItemIndex !== -1) {
          const existingItem = state.items[existingItemIndex];
          if (existingItem.quantity > 1) {
              existingItem.quantity -= 1;
              existingItem.totalPrice -= existingItem.price;
              state.totalAmount -= existingItem.price;
          } else {
              // Удаляем элемент, если количество достигает 0
              state.totalAmount -= existingItem.price;
              state.items.splice(existingItemIndex, 1);
        }
      }
    }
  },
});

export const { addItemToCart, incrementQuantity, decrementQuantity, minusItemToCart } = cartSlice.actions;

export const selectCartTotal = (state: RootState) => state.cart.totalAmount;

export const selectCartItemsById = (state: RootState, id: string, weight: string) =>
  state.cart.items.find(item => item.id === id && item.weight === weight);

export default cartSlice.reducer;