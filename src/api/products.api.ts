/* eslint-disable @typescript-eslint/no-unused-vars */
import { IProduct } from "@/types/product.type";
import api from ".";

const getProducts = async () => {
  try {
    const response = await api.get("/api/all/product/get");
    return {
      data: response.data?.data,
    };
  } catch (error: unknown) {
    return {
      error: "Something went wrong",
    };
  }
};

// get product by id
const getProductById = async (id: number) => {
  try {
    const { data, error } = await getProducts();
    console.log(" data:", data);
    if (error) {
      return { error };
    }
    const product: IProduct = data?.data.find(
      (product: IProduct) => product.id === id
    );
    return { data: product };
  } catch (error: unknown) {
    return {
      error: "Something went wrong",
    };
  }
};

export { getProductById, getProducts };
