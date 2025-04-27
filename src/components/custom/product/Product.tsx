import getProductImage from "@/lib/getProductImage";
import { IProduct } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";
import ProductActions from "./ProductActions";

type ProductProps = {
  product: IProduct;
};
const Product = ({ product }: ProductProps) => {
  const {
    name,
    discount_amount,
    price,
    image,
    category: { name: categoryName },
  } = product || {};
  const pdImg = getProductImage(image);
  return (
    <div className="group border border-gray-200 rounded-lg  p-3 relative">
      <Image
        width={1000}
        height={800}
        src={pdImg}
        alt={name}
        className="w-full h-[300px] rounded-t-lg"
      />
      <div className="p-4">
        <p className="text-gray-500 font-semibold">{categoryName}</p>
        <Link href={`/products/${product.id}`}>
          <h2 className="text-xl font-semibold">{name}</h2>
        </Link>
        <p className="text-gray-800 mt-2">
          <span className="font-medium text-indigo-600 opacity-60 line-through mr-1">
            &#2547;
            {price}
          </span>{" "}
          <span className="font-medium text-indigo-600 ">
            &#2547;
            {price - parseInt(discount_amount)}
          </span>
        </p>
      </div>
      {/* Actions */}
      <ProductActions product={product} />
    </div>
  );
};

export default Product;
