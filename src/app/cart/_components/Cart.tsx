"use client";
import { useAppSelector } from "@/redux/app/hooks";
import { selectCart } from "@/redux/features/cart/cartSelector";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartProducts } = useAppSelector(selectCart);
  console.log(" cartProducts:", cartProducts);
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-6">Your Cart</h2>
      {cartProducts.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cart;
