import { createSlice } from "@reduxjs/toolkit";

const getCartFromStorage = (userId) => {
  const storedCart = localStorage.getItem(`cartItems_${userId}`);
  return storedCart ? JSON.parse(storedCart) : [];
};

const savecartToStorage = (userId, items) => {
  localStorage.setItem(`cartItems_${userId}`, JSON.stringify(items));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    userId: null,
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
      state.items = getCartFromStorage(action.payload);
    },

    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += product.quantity;
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== product.id);
        }
      } else {
        if (product.quantity > 0) {
          state.items.push(product);
          alert("Item is Added In Cart")
        }
      }

      if (state.userId) savecartToStorage(state.userId, state.items);
    },

    toggleAddToCart: (state, action) => {
      const product = action.payload;
      const existitem = state.items.find((item) => item.id === product.id);
      if (existitem) {
        state.items = state.items.filter((item) => item.id !== product.id);
        alert("item is removed from your Cart");
      } else {
        state.items.push(product);
        alert("item is added to Cart");
      }
      if (state.userId) savecartToStorage(state.userId, state.items);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      if (state.userId) savecartToStorage(state.userId, state.items);
    },
    clearCart: (state) => {
      state.items = [];
      },
  },
});
export const {
  setUserId,
  addToCart,
  removeFromCart,
  clearCart,
  toggleAddToCart,
} = cartSlice.actions;
export default cartSlice.reducer;
