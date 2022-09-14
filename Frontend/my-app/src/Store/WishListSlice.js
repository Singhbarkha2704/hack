import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishItems: localStorage.getItem("wishItems")
    ? JSON.parse(localStorage.getItem("wishItems"))
    : [],
  wishTotalQuantity: 0  
};

const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addToWish(state, action) {
      const existingIndex = state.wishItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingIndex >= 0) {
        state.wishItems[existingIndex] = {
          ...state.wishItems[existingIndex],
          wishQuantity: state.wishItems[existingIndex].wishQuantity + 1,
        };
    
      } else {
        let tempProductItem = { ...action.payload, wishQuantity: 1 };
        state.wishItems.push(tempProductItem);
      }
      localStorage.setItem("wishItems", JSON.stringify(state.wishItems));
    },

    removeFromWish(state, action) {
      state.wishItems.map((wishItem) => {
        if (wishItem._id === action.payload._id) {
          const nextWishItems = state.wishItems.filter(
            (item) => item._id !== wishItem._id
          );

          state.wishItems = nextWishItems;
        }
        localStorage.setItem("wishItems", JSON.stringify(state.wishItems));
        return state;
      });
    },
    
    clearWish(state, action) {
      state.wishItems = [];
      localStorage.setItem("wishItems", JSON.stringify(state.wishItems));
    },
  },
});

export const { addToWish, removeFromWish, clearWish } = wishSlice.actions;

export default wishSlice.reducer;