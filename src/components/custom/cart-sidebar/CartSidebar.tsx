"use client";

import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { selectCart } from "@/redux/features/cart/cartSelector";
import { toggleCartSidebar } from "@/redux/features/cart/cartSlice";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import CartSidebarProducts from "./CartSidebarProducts";

const CartSidebar = () => {
  const dispatch = useAppDispatch();
  const { isSidebarOpen, bookedProducts } = useAppSelector(selectCart);
  const totalPrice = bookedProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (isSidebarOpen && !target.closest(".sidebar")) {
        dispatch(toggleCartSidebar());
      }
    }
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dispatch, isSidebarOpen]);

  return (
    <div className="relative z-10" role="dialog" aria-modal="true">
      <div
        role="button"
        onClick={() => {
          dispatch(toggleCartSidebar());
        }}
        className={`${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed  inset-0 bg-gray-500/75 transition-all duration-500 sidebar-overlay`}
        aria-hidden="true"
      ></div>

      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } fixed inset-0 overflow-hidden transition-transform duration-500 ease-in-out `}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md sidebar">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 ">
                  {/* Close Sidebar */}
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      Shopping cart
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        onClick={() => {
                          dispatch(toggleCartSidebar());
                        }}
                        type="button"
                        className="cursor-pointer relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <X />
                      </button>
                    </div>
                  </div>
                  {/*  Cart Products */}
                  <CartSidebarProducts />
                </div>
                {/* Cart Footer */}
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${totalPrice}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/cart"
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                    >
                      Checkout
                    </Link>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or
                      <button
                        onClick={() => {
                          dispatch(toggleCartSidebar());
                        }}
                        type="button"
                        className="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500 ml-1"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
