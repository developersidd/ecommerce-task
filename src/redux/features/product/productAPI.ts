import type { IProduct } from "@/types/product.type";
import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // endpoints here
    getProducts: builder.query<IProduct[], undefined>({
      query: () => "/api/all/product/get",
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err) {
          console.log("err:", err);
          // Do Nothing
        }
      },
    }),
    getProduct: builder.query<IProduct, number>({
      query: (id) => `/products/${id}`,
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err) {
          console.log("err:", err);
          // Do Nothing
        }
      },
    }),
  }),
});

export const { useGetProductQuery, useGetProductsQuery } = productApi;
