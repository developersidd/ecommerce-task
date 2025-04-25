import { useAppSelector } from "@/redux/app/hooks";
import { selectCart } from "@/redux/features/cart/cartSelector";
import CartSidebarProduct from "./CartSidebarProduct";

const CartSidebarProducts = () => {
  const { bookedProducts } = useAppSelector(selectCart);
  return (
    <div className="mt-8">
      <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          {bookedProducts.map((product) => (
            <CartSidebarProduct key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartSidebarProducts;
