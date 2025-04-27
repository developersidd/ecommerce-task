import { useAppDispatch } from "@/redux/app/hooks";
import {
  editCartProductQuantity,
  removeProductFromCart,
} from "@/redux/features/cart/cartSlice";
import { ICartProduct } from "@/types/cart.type";
import { Minus, Plus, Trash } from "lucide-react";
import { FC, useState } from "react";

interface CartItemProps {
  item: ICartProduct;
}

const CartItem: FC<CartItemProps> = ({ item }) => {
  const { id, image, name, stock, price, quantity: pdQuantity } = item || {};
  const [quantity, setQuantity] = useState(pdQuantity || 1);
  const dispatch = useAppDispatch();
  // Handle quantity dispatch
  const handleDispatch = (method: string) => {
    dispatch(
      editCartProductQuantity({
        id,
        quantity: 1,
        method,
      })
    );
  };

  // handle quantity
  const handleQuantity = (method: string) => {
    if (method === "plus" && quantity + 1 <= stock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
      handleDispatch("inc");
    } else if (method === "minus" && quantity - 1 > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      handleDispatch("dec");
    }
  };

  return (
    <div className="flex items-center justify-between py-4 border-b-1 border-gray-300">
      <div className="flex items-center gap-3 sm:gap-4">
        <img src={image} alt={name} className="w-[80px]  md:w-[100px] h-[60px] md:h-[70px] rounded-md " />
        <div>
          <h3 className="font-semibold max-sm:text-sm ">{name}</h3>
          <p className="text-gray-600">&#2547;{price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
          <button
            disabled={quantity === 1}
            onClick={() => handleQuantity("minus")}
            className="px-2 py-1.5  hover:bg-gray-100"
          >
            <Minus size={16} />
          </button>
          <span className="px-1.5">{quantity}</span>
          <button
            disabled={quantity >= stock}
            onClick={() => handleQuantity("plus")}
            className="px-2 py-1.5 hover:bg-gray-100"
          >
            <Plus size={16} />
          </button>
        </div>
        <button
          onClick={() => {
            dispatch(removeProductFromCart(item.id));
          }}
          className="text-red-500 hover:text-red-700"
        >
          <Trash size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
