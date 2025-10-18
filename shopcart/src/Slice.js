import { configureStore, createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], total: 0 },
    reducers: {
    addItem: (state, action) => {
      const itemExists = state.items.find(i => i.id === action.payload.id);
      if (!itemExists) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        itemExists.quantity += 1;
      }
    },
    removeItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(i => i.id !== action.payload);
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;