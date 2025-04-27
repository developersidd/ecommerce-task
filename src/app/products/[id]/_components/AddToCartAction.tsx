"use client";
import getProductImage from "@/lib/getProductImage";
import { useAppDispatch } from "@/redux/app/hooks";
import { selectCart } from "@/redux/features/cart/cartSelector";
import {
  addToCart,
  editCartProductQuantity,
} from "@/redux/features/cart/cartSlice";
import { IProduct } from "@/types/product.type";
import { MinusIcon, PlusIcon, ShoppingCartIcon } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

type AddToCartActionProps = {
  product: IProduct;
};

const AddToCartAction = ({ product }: AddToCartActionProps) => {
  const { id, name, image, price, stock, discount_amount, category } =
    product || {};

  const [quantity, setQuantity] = useState(1);
  const { cartProducts = [] } = useSelector(selectCart);
  const dispatch = useAppDispatch();

  const handleCartProduct = () => {
    const cartProduct = cartProducts.find((p) => p.id === id);
    if (cartProduct?.id) {
      dispatch(
        editCartProductQuantity({ id, quantity: quantity, method: "inc" })
      );
      toast.success(`${name} quantity updated in cart`);
    } else {
      dispatch(
        addToCart({
          id,
          quantity,
          image: getProductImage(image as string),
          price,
          name,
          category: category?.name,
          stock,
          discount_amount,
        })
      );
    }
    toast.success(`${name} added to cart`);
    setQuantity(1);
  };

  // handle quantity
  const handleQuantity = (method: string) => {
    setQuantity((prevQuantity) => {
      if (method === "plus") {
        return prevQuantity + 1 > stock ? prevQuantity : prevQuantity + 1;
      } else if (method === "minus") {
        return prevQuantity - 1 < 1 ? prevQuantity : prevQuantity - 1;
      }
      return prevQuantity;
    });
  };

  return (
    <div className="flex items-center max-lg:gap-8 pt-3 md:pt-5 lg:w-4/5 2xl:w-3/5 justify-between">
      <div className="bg-gray-200 px-4 lg:px-6 2xl:px-8 py-3 shadow rounded-md flex items-center gap-3">
        <button
          disabled={quantity === 1}
          onClick={() => handleQuantity("minus")}
          className=""
        >
          {" "}
          <MinusIcon className="h-6 " />{" "}
        </button>
        <div className="w-12 font-medium bg-gray-100 rounded-md h-8  text-center flex justify-center items-center">
          {" "}
          {quantity}{" "}
        </div>
        <button
          disabled={quantity >= 20}
          onClick={() => handleQuantity("plus")}
          className=""
        >
          {" "}
          <PlusIcon className="h-6" />{" "}
        </button>
      </div>

      <div className="">
        <button
          type="button"
          onClick={handleCartProduct}
          className="px-4 md:px-6 lg:px-7 border-2 border-black flex items-center max-w-max py-3 gap-2 hover:bg-black hover:text-white"
        >
          <span>
            {" "}
            <ShoppingCartIcon className="h-5" />{" "}
          </span>
          <span> Add to cart </span>
        </button>
      </div>
    </div>
  );
};

export default AddToCartAction;
