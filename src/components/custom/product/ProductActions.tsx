"use client";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { selectProduct } from "@/redux/features/product/productSelector";
import { addToWhichList } from "@/redux/features/product/productSlice";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";

type ProductActionsProps = {
  productId: number;
};

const ProductActions = ({ productId }: ProductActionsProps) => {
  const { whichListProductsId } = useAppSelector(selectProduct);

  const dispatch = useAppDispatch();

  // handle add to whichlist
  const handleWhichList = (id: number) => {
    if (!whichListProductsId.includes(id)) {
      dispatch(addToWhichList(id));
    }
  };

  // handle add to cart
  const handleAddToCart = (id: number) => {
    dispatch(addToCart(id));
  };

  return (
    <div className="group-hover:opacity-100 opacity-0  z-50 group-hover:top-[60%] transition-all duration-500 opacity- flex items-center justify-center absolute top-[80%] left-1/2">
      <ul className="flex items-center gap-4 absolute inset-y-0  m-auto ">
        <li>
          <Link href="/cart">
            <button className="link transition hover:scale-110 h-10 w-10 shadow-xl  rounded-full flex items-center justify-center bg-white">
              {" "}
              <ShoppingCart className="w-5 h-5" />
            </button>
          </Link>
        </li>

        <li className="search">
          <Link
            href={`/products/${productId}`}
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
            onClick={() => handleWhichList(productId)}
            className="transition hover:scale-110 h-10 w-10 shadow-xl  rounded-full flex items-center justify-center bg-white"
          >
            <Heart
              className={`w-5 h-5 ${
                whichListProductsId.includes(productId) ? "text-indigo-600" : ""
              }`}
            />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProductActions;
