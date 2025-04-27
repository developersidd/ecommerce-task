"use client";
import { useAppSelector } from "@/redux/app/hooks";
import { selectCart } from "@/redux/features/cart/cartSelector";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartProducts } = useAppSelector(selectCart);
  return (
    <div className="min-h-[400px] max-h-[700px] overflow-y-auto bg-gray-50 p-4 md:p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2 md:mb-6">Your Cart</h2>
      {cartProducts.length > 0 ? (
        cartProducts.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <div className="flex items-center justify-center h-[300px]">
          <p className="text-gray-500">No products in the cart!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
