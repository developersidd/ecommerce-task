import { IWishlistItem } from "@/types/product.type";
import { createSlice } from "@reduxjs/toolkit";

interface IInitProductState {
  wishlistProducts: Array<IWishlistItem>;
}

interface IAction<T> {
  payload: T;
  type: string;
}

const initialState: IInitProductState = {
  wishlistProducts: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToWishlist(state: IInitProductState, action: IAction<IWishlistItem>) {
      state.wishlistProducts.push(action.payload);
    },
    removeFromWishlist(state: IInitProductState, action: IAction<number>) {
      state.wishlistProducts = state.wishlistProducts.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = productSlice.actions;
export default productSlice.reducer;
