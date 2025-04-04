import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  showNav: false,
  activeOrder: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      if (!action.payload.hasOwnProperty('quantity')) {
        action.payload.quantity = 1;
        state.items.push(action.payload);
      } else {
        state.items.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity++;
          }

          return item;
        });
      }
    },
    updateQuantity(state, action) {
      if (action.payload.type === 'increase') {
        state.items.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity++;
          }

          return item;
        });
      } else {
        state.items.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity--;
          }

          return item;
        });
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => {
        if (item.id !== action.payload) {
          return item;
        }
      });
    },
    showNav(state, action) {
      state.showNav = !state.showNav;
    },
    setActiveOrder(state, action) {
      state.activeOrder = action.payload;
    },
    emptyCart(state, action) {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  updateQuantity,
  removeFromCart,
  showNav,
  setActiveOrder,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
