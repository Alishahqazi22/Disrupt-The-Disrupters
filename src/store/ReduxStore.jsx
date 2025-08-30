import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wishListReducer from "./WishListSlice";

const store = configureStore({
  reducer: {
    wishList: wishListReducer,
    cart: cartReducer,
  },
});

export default store;