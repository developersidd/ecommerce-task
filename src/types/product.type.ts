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
  product_images: [
    {
      id: number;
      name: string;
      pivot: {
        product_id: number;
        image_id: number;
      };
    }
  ];
  created_at: string;
  updated_at: string;
}

export type { IProduct };
