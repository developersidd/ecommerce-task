"use client";
import getProductImage from "@/lib/getProductImage";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { addToCart, toggleCartSidebar } from "@/redux/features/cart/cartSlice";
import { selectProduct } from "@/redux/features/product/productSelector";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/redux/features/product/productSlice";
import { IProduct } from "@/types/product.type";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

type ProductActionsProps = {
  product: IProduct;
};

const ProductActions = ({ product }: ProductActionsProps) => {
  const { id, name, image, price, stock, discount_amount, category } =
    product || {};
  const { WishlistProductsId } = useAppSelector(selectProduct);

  const dispatch = useAppDispatch();

  // handle add to Wishlist
  const handleWishlist = (id: number) => {
    if (!WishlistProductsId.includes(id)) {
      dispatch(addToWishlist(id));
    } else {
      dispatch(removeFromWishlist(id));
    }
  };

  // handle add to cart
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        quantity: 1,
        image: getProductImage(image as string),
        price,
        name,
        category: category?.name,
        stock,
        discount_amount,
      })
    );
    toast.success(`${name} added to cart`);
    dispatch(toggleCartSidebar());
  };

  return (
    <div className="group-hover:opacity-100 opacity-0  z-50 group-hover:top-[60%] transition-all duration-500 opacity- flex items-center justify-center absolute top-[80%] left-1/2">
      <ul className="flex items-center gap-4 absolute inset-y-0  m-auto ">
        <li>
          <button
            onClick={handleAddToCart}
            className="link transition hover:scale-110 h-10 w-10 shadow-xl  rounded-full flex items-center justify-center bg-white cursor-pointer"
          >
            {" "}
            <ShoppingCart className="w-5 h-5" />
          </button>
        </li>

        <li className="search">
          <Link
            href={`/products/${id}`}
            className="transition hover:scale-110 h-10 w-10 shadow-xl  rounded-full flex items-center justify-center bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </Link>
        </li>
        <li className="heart">
          <button
            onClick={() => handleWishlist(id)}
            className="transition hover:scale-110 h-10 w-10 shadow-xl  rounded-full flex items-center justify-center bg-white"
          >
            {WishlistProductsId.includes(id) ? (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="w-5 h-5"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
              </svg>
            ) : (
              <Heart className={`w-5 h-5 `} />
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProductActions;
