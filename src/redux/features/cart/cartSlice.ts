import { ICartProduct } from "@/types/cart.type";
import { createSlice } from "@reduxjs/toolkit";

interface IInitCartState {
  cartProducts: ICartProduct[];
  isSidebarOpen: boolean;
}

const initialState: IInitCartState = {
  cartProducts: [],
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
      const clickedPd = state.cartProducts.find((pd) => pd.id === payload?.id);
      if (clickedPd) {
        if (payload.method === "inc") {
          clickedPd.quantity += payload.quantity;
        } else {
          clickedPd.quantity -= payload.quantity;
        }
      }
    },
    addToCart: (
      state: IInitCartState,
      {
        payload,
      }: {
        payload: ICartProduct;
        type: string;
      }
    ) => {
      const clickedPd = state.cartProducts.find((pd) => pd.id === payload?.id);
      if (!clickedPd) {
        state.cartProducts.push(payload);
      }else
      if (clickedPd) {
        clickedPd.quantity += payload.quantity;
      }
    },
    removeProductFromCart: (state, action) => {
      const productIndexToRemove = state.cartProducts.findIndex(
        (p) => p.id === action.payload
      );
      state.cartProducts.splice(productIndexToRemove, 1);
    },

    clearCartProducts: (state) => {
      state.cartProducts = [];
    },
  },
});

export const {
  addToCart,
  clearCartProducts,
  removeProductFromCart,
  editCartProductQuantity,
  toggleCartSidebar,
} = cartSlice.actions;

export default cartSlice.reducer;
