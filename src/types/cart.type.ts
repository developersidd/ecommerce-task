import { IProduct } from "./product.type";

interface IBookedProduct extends IProduct {
  quantity: number;
}

export type { IBookedProduct };
