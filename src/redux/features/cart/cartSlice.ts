import { IBookedProduct } from "@/types/cart.type";
import { createSlice } from "@reduxjs/toolkit";

interface IInitCartState {
  bookedProducts: IBookedProduct[];
  isSidebarOpen: boolean;
}

const initialState: IInitCartState = {
  bookedProducts: [],
  isSidebarOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    editCartProductQuantity: (
      state: IInitCartState,
      {
        payload,
      }: {
        payload: { id: number; quantity: number; method: string };
        type: string;
      }
    ) => {
      const clickedPd = state.bookedProducts.find(
        (pd) => pd.id === payload?.id
      );
      if (clickedPd) {
        if (payload.method === "inc") {
          clickedPd.quantity += payload.quantity;
        } else {
          clickedPd.quantity -= payload.quantity;
        }
      }
    },
    editProductQuantity: (
      state: IInitCartState,
      {
        payload,
      }: {
        payload: any;
        type: string;
      }
    ) => {
      const clickedPd = state.bookedProducts.find(
        (pd) => pd.id === payload?.id
      );
      if (clickedPd) {
        clickedPd.quantity += payload.quantity;
      } else {
        state.bookedProducts.push(payload);
      }
    },
    removeProductFromCart: (state, action) => {
      const productIndexToRemove = state.bookedProducts.findIndex(
        (p) => p.id === action.payload
      );
      state.bookedProducts.splice(productIndexToRemove, 1);
    },

    clearCartProducts: (state) => {
      state.bookedProducts = [];
    },
  },
});

export const {
  editProductQuantity,
  clearCartProducts,
  removeProductFromCart,
  editCartProductQuantity,
  toggleCartSidebar,
} = cartSlice.actions;

export default cartSlice.reducer;
