"use client";

type OrderSummaryProps = {
  onPlaceOrder: (e: React.FormEvent) => void;
  calcultions: {
    totalPrice: number;
    totalDiscount: number;
    deliveryCharge: number;
    totalAmount: number;
  };
};

const OrderSummary = ({ onPlaceOrder, calcultions }: OrderSummaryProps) => {
  const { totalPrice, totalDiscount, deliveryCharge, totalAmount } =
    calcultions;
  return (
    <div className="mt-6">
      <div className="flex justify-between py-2">
        <span className="text-gray-600 font-medium">Subtotal</span>
        <span className="font-semibold">&#2547;{totalPrice} </span>
      </div>
      <div className="flex justify-between py-2">
        <span className="text-gray-600 font-medium">Discount</span>
        <span className="font-semibold">&#2547;{totalDiscount}</span>
      </div>
      <div className="flex justify-between py-2">
        <span className="text-gray-600 font-medium">Delivery</span>
        <span className="font-semibold">&#2547;{deliveryCharge}</span>
      </div>
      <hr className="my-2 text-gray-300" />
      <div className="flex justify-between font-semibold text-lg">
        <span className="text-gray-600 font-medium">Total</span>
        <span className="font-semibold">&#2547;{totalAmount}</span>
      </div>
      <button
        onClick={onPlaceOrder}
        type="submit"
        className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold"
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
