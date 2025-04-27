interface IProduct {
  id: number;
  name: string;
  short_desc: string;
  image: string;
  is_published: number;
  price: number;
  stock: number;
  buying_price: number;
  is_discount: number;
  discount_amount: string;
  discount_date: string;
  category: {
    id: number;
    name: string;
  };
  created_at: string;
  updated_at: string;
}

interface IWishlistItem {
  id: number;
  imageUrl: string;
  name: string;
  category: string;
  price: number;
  discount_amount: string;
  stock: number; 
}

export type { IProduct, IWishlistItem };
