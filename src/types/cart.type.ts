interface IBookedProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  stock: number;
  discount_amount: string;
  quantity: number;
  category: string;
}

export type { IBookedProduct };
