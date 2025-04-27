import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { selectCart } from "@/redux/features/cart/cartSelector";
import { clearCartProducts } from "@/redux/features/cart/cartSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type OrderFormProps = {
  ref: React.RefObject<HTMLButtonElement | null>;
  calcultions: {
    totalPrice: number;
    totalDiscount: number;
    deliveryCharge: number;
    totalAmount: number;
  };
};

const orderFormSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  address: z.string().min(10, { message: "Address must be greater than 10 characters" }),
  phone: z.string().min(11, { message: "Phone number must be 11 digits" }),
});

type FormData = z.infer<typeof orderFormSchema>;

const OrderForm = ({ ref, calcultions }: OrderFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(orderFormSchema),
  });
  const { cartProducts } = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const router = useRouter();
  // handle form submit
  const onSubmit = async (data: FormData) => {
    const { address, name, phone } = data;
    const { totalPrice, totalDiscount, deliveryCharge } = calcultions;
    const orderData = {
      product_ids: cartProducts.map((item) => item.id).toString(),
      s_product_qty: cartProducts.map((item) => item.quantity).toString(),
      c_phone: phone,
      c_name: name,
      address,
      courier: "steadfast",
      advance: null,
      cod_amount: totalPrice,
      discount_amount: totalDiscount,
      delivery_charge: deliveryCharge,
    };

    try {
      const res = await axios.post(
        "https://admin.refabry.com/api/public/order/create",
        { ...orderData }
      );
      console.log(" res:", res);
      if (res.status === 200) {
        toast.success("Order placed successfully!");
        dispatch(clearCartProducts());
        router.push("/");
      }
    } catch (e: unknown) {
      console.log(" e:", e);
      toast.error("There was an error occurred!");
    }
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="relative mb-6">
        <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
          Name
        </label>
        <input
          {...register("name")}
          type="text"
          className="block w-full h-11 px-5 py-2.5  leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none "
          placeholder=""
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div className="relative mb-6">
        <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
          Address
        </label>
        <input
          type="text"
          {...register("address")}
          className="block w-full h-11 px-5 py-2.5  leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none "
          placeholder=""
        />
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address.message}</p>
        )}
      </div>
      <div className="relative mb-4">
        <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
          Phone
        </label>
        <input
          type="text"
          {...register("phone")}
          className="block w-full h-11 px-5 py-2.5  leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none "
          placeholder=""
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>
      <button
        ref={ref}
        type="submit"
        className="hidden"
        value="Submit"
      ></button>
    </form>
  );
};

export default OrderForm;
