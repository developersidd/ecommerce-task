import { useAppDispatch } from "@/redux/app/hooks";
import { removeProductFromCart } from "@/redux/features/cart/cartSlice";
import { ICartProduct } from "@/types/cart.type";
import Image from "next/image";

type CartSidebarProductProps = {
  product: ICartProduct;
};
const CartSidebarProduct = ({ product }: CartSidebarProductProps) => {
  const dispatch = useAppDispatch();
  const { id, name, image, price, quantity, category } = product || {};
  return (
    <li key={id} className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          width={100}
          height={100}
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{name}</h3>
            <p className="ml-4">
              &#2547;
              {price}
            </p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{category}</p>
        </div>
        <div className="mt-6 flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {quantity}</p>

          <div className="flex">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                dispatch(removeProductFromCart(id));
              }}
              type="button"
              className="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartSidebarProduct;
