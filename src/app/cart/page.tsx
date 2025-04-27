"use client";
import { useAppSelector } from "@/redux/app/hooks";
import { selectCart } from "@/redux/features/cart/cartSelector";
import { useRef } from "react";
import Cart from "./_components/Cart";
import OrderForm from "./_components/OrderForm";
import OrderSummary from "./_components/OrderSummary";

const CartPage = () => {
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const { cartProducts } = useAppSelector(selectCart);
  const handlePlaceOrder = () => {
    if (submitButtonRef.current && cartProducts.length > 0) {
      submitButtonRef.current.click();
    }
  };
  const totalPrice = cartProducts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalDiscount = cartProducts.reduce(
    (acc, item) => acc + parseInt(item.discount_amount) * item.quantity,
    0
  );

  const deliveryCharge = totalPrice > 0 ? 80 : 0;
  const totalAmount = totalPrice - totalDiscount + deliveryCharge;

  const calcultions = {
    totalPrice,
    totalDiscount,
    deliveryCharge,
    totalAmount,
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Cart />
        <div>
          <OrderForm ref={submitButtonRef} calcultions={calcultions} />
          <OrderSummary
            calcultions={calcultions}
            onPlaceOrder={handlePlaceOrder}
          />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
