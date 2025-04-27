import { createSlice } from "@reduxjs/toolkit";

interface IInitProductState {
  WishlistProductsId: Array<number>;
}

interface IAction {
  payload: number;
  type: string;
}

const initialState: IInitProductState = {
  WishlistProductsId: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToWishlist(state: IInitProductState, action: IAction) {
      state.WishlistProductsId.push(action.payload);
    },
    removeFromWishlist(state: IInitProductState, action: IAction) {
      state.WishlistProductsId.splice(
        state.WishlistProductsId.indexOf(action.payload),
        1
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = productSlice.actions;
export default productSlice.reducer;
