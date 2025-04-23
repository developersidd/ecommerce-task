"use client";
import { useAppSelector } from "@/redux/app/hooks";
import { selectCart } from "@/redux/features/cart/cartSelector";
import { selectProduct } from "@/redux/features/product/productSelector";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const { bookedProducts } = useAppSelector(selectCart);
  const { whichListProductsId } = useAppSelector(selectProduct);

  return (
    <div className="border border-gray-200">
      <div className="flex items-center h-16 md:h-[75px]  justify-between px-4 md:px-5 lg:px-10 ">
        <div className="">
          <Link href="/" className="md:text-2xl lg:text-3xl text-xl font-bold">
            <span className="text-blue-600">
              <ShoppingCart className="inline-block -mt-2" size={35} />
              ABMart
            </span>
          </Link>
        </div>
        <div className="flex-1">
          <ul className="flex text-lg font-medium items-center justify-end">
            <Link
              href="/shop"
              className={` hidden md:block mr-2 md:mr-5 text-base md:text-lg`}
            >
              Shop{" "}
            </Link>

            <Link href="/cart" className={` mr-2 md:mr-5 text-base md:text-lg`}>
              Cart{" "}
            </Link>

            <Link href="/cart" className={` relative  mr-5 `}>
              <ShoppingCart className="h-6 w-6" />
              <span className="bg-blue-600 text-gray-200 w-5 h-5 flex items-center justify-center rounded-full text-xs absolute -right-3 bottom-3 font-bold">
                {bookedProducts.length}
              </span>
            </Link>

            <Link href="/whichlist" className={` relative  mr-5 md:mr-0 `}>
              <Heart className="h-6 w-6" />
              <span className="bg-blue-600 text-gray-200 w-5 h-5 flex items-center justify-center rounded-full text-xs absolute -right-3 bottom-3 font-bold">
                {whichListProductsId.length}
              </span>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
