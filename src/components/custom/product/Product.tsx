import getProductImage from "@/lib/getProductImage";
import { IProduct } from "@/types/product.type";
import ProductActions from "./ProductActions";

type ProductProps = {
  product: IProduct;
};
const Product = ({ product }: ProductProps) => {
  console.log(" product:", product);
  const {
    name,
    id,
    discount_amount,
    price,
    image,
    category: { name: categoryName },
  } = product || {};
  const pdImg = getProductImage(image);
  return (
    <div className="group border border-gray-200 rounded-lg  p-4 relative">
      <img src={pdImg} alt={name} className="w-full h-[300px] rounded-t-lg" />
      <div className="p-4">
        <p className="text-gray-500 font-semibold">{categoryName}</p>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-800 mt-2">
          <span className="font-medium text-indigo-600 opacity-60 line-through mr-1">
            ${price}
          </span>{" "}
          <span className="font-medium text-indigo-600 ">
            ${price - parseInt(discount_amount)}
          </span>
        </p>
      </div>
      {/* Actions */}
      <ProductActions productId={id} />
    </div>
  );
};

export default Product;
