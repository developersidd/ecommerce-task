"use client";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { selectCart } from "@/redux/features/cart/cartSelector";
import { useGetProductsQuery } from "@/redux/features/product/productAPI";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  //const { user } = useAppSelector(selectAuth);
  const { bookedProducts } = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const router = useRouter();
  // debounce handler
  const handleSearchDebounce = (cb: (value: string) => void, delay: number) => {
    let timeout: NodeJS.Timeout;
    return function (value: string) {
      clearTimeout(timeout);
      timeout = setTimeout(() => cb(value), delay);
    };
  };

  const searchTask = (value: string) => {
    dispatch(searchBy(value));
    router.push("/shop");
  };
  // get all products
  const { data: products } = useGetProductsQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  console.log(" products:", products);
  //  debounce helper
  const handleSearch = handleSearchDebounce(searchTask, 300);

  return (
    <div className="shadow-lg">
      <div className="flex items-center h-16 md:h-[68px]  justify-between px-4 md:px-5 lg:px-10 ">
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
            <Link
              href="/logout"
              className={` mr-2 md:mr-5 text-base md:text-lg`}
            >
              Logout{" "}
            </Link>

            <Link href="/cart" className={` relative  mr-5 md:mr-0 `}>
              <ShoppingCart className="h-6 w-6" />
              <span className="bg-blue-600 text-gray-200 w-5 h-5 flex items-center justify-center rounded-full text-xs absolute -right-3 bottom-3 font-bold">
                {bookedProducts.length}
              </span>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
