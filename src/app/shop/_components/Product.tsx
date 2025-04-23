import { IProduct } from "@/types/product.type";

type ProductProps = {
  product: IProduct;
};
const Product = ({ product }: ProductProps) => {
  console.log(" product:", product)
  const {
    name,
    discount_amount,
    price,
    image,
    category: { name: categoryName },
  } = product || {};

  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-600">{categoryName}</p>
          <p className="text-gray-800 mt-2">
            Price: ${price} {discount_amount && `(-${discount_amount})`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
