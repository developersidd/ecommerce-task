import { useAppDispatch } from "@/redux/app/hooks";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { removeFromWishlist } from "@/redux/features/product/productSlice";
import { IWishlistItem } from "@/types/product.type";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";

interface Props {
  item: IWishlistItem;
}

const WishlistRow: React.FC<Props> = ({ item }) => {
  const { id, category, name, price, stock, discount_amount, imageUrl } =
    item || {};
  const dispatch = useAppDispatch();

  // handle remove item from wishlist
  const handleRemoveItem = () => {
    dispatch(removeFromWishlist(id));
  };

  // handle add to cart
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        quantity: 1,
        image: imageUrl,
        price,
        name,
        category: category,
        stock,
        discount_amount,
      })
    );
    toast.success(`${name} added to cart`);
  };
  const stockStatus = stock > 1 ? "In stock" : "Out of stock";

  return (
    <tr className="border border-gray-300 group hover:bg-gray-50 transition relative">
      <td className="flex items-center gap-2 py-6 pl-2 md:pl-4 ">
        <button
          onClick={handleRemoveItem}
          className="absolute top-2 rounded-full bg-red-600 px-1.5 py-[1px] right-2 lg:right-4 cursor-pointer text-white"
        >
          ✕
        </button>
        <Image
          width={150}
          height={120}
          src={imageUrl}
          alt={name}
          className="w-14 h-[60px] xl:w-20 xl:h-[70px] rounded-md "
        />
        <div>
          <h2 className="font-semibold uppercase text-sm md:text-base">
            {name}
          </h2>
          <div className="text-xs text-gray-500 font-semibold">
            {" "}
            Category:
            {category}
          </div>
          <p className="lg:hidden text-gray-800 mt-2">
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
      </td>
      <td className="max-lg:hidden  py-6 text-gray-700 font-medium">
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
      </td>
      <td className="py-6">
        <span className={`${stock > 1 ? "text-green-600" : "text-red-600"}`}>
          {stockStatus}
        </span>
      </td>
      <td className="py-6 pr-3">
        <button
          onClick={handleAddToCart}
          className="cursor-pointer border  px-2.5 md:px-4 py-1.5 md:py-2 text-xs font-semibold uppercase hover:bg-black hover:text-white transition"
        >
          Add to Cart
        </button>
      </td>
    </tr>
  );
};

export default WishlistRow;
