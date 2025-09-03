import { createSlice } from "@reduxjs/toolkit";

const getWishListFromStorage = (userId) => {
  const stored = localStorage.getItem(`wishListItems_${userId}`);
  return stored ? JSON.parse(stored) : [];
};

const saveWishListToStorage = (userId, items) => {
  localStorage.setItem(`wishListItems_${userId}`, JSON.stringify(items));
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    items: [],
    userId: null,
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
      state.items = getWishListFromStorage(action.payload);
    },
    toggleWishList: (state, action) => {
      const product = action.payload;
      const exist = state.items.find((item) => item.id === product.id);

      if (exist) {
        state.items = state.items.filter((item) => item.id !== product.id);
        alert("Item is removed from your Wish List");
      } else {
        state.items.push(product);
        alert("Item is added to Wish List");
      }

      if (state.userId) saveWishListToStorage(state.userId, state.items);
    },
    removeFromWishList: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
      if (state.userId) saveWishListToStorage(state.userId, state.items);
    },
    clearWishList: (state) => {
      state.items = [];
      state.userId = null;
    },
  },
});

export const { setUserId, toggleWishList, removeFromWishList, clearWishList } =
  wishListSlice.actions;

export default wishListSlice.reducer;
