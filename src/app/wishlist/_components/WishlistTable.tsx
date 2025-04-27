"use client";
import { useAppSelector } from "@/redux/app/hooks";
import { selectProduct } from "@/redux/features/product/productSelector";
import WishlistRow from "./WishlistRow";

const WishlistTable = () => {
  const { wishlistProducts } = useAppSelector(selectProduct);
  return (
    <>
      {wishlistProducts.length > 0 ? (
        <div className=" p-2  md:px-6 xl:p-8">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="">
                <th className="py-4 text-left font-semibold text-sm md:text-base text-gray-700">
                  PRODUCT
                </th>
                <th className="hidden lg:block py-4 text-left font-semibold text-gray-700">
                  PRICE
                </th>
                <th className="py-4 text-left font-semibold text-sm md:text-base text-gray-700">
                  STOCK STATUS
                </th>
                {/*<th className="max-md:hidden py-4"></th>*/}
              </tr>
            </thead>
            <tbody>
              {wishlistProducts.map((item) => (
                <WishlistRow key={item.id} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[60vh]">
          <h2 className="text-lg xl:text-2xl font-semibold text-gray-500">
            No items found in wishlist
          </h2>
        </div>
      )}
    </>
  );
};

export default WishlistTable;
