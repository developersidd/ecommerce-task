import { getProducts } from "@/api/products.api";
import Products from "@/components/custom/product/Products";

const ShopPage = async () => {
  const { data, error } = await getProducts();
  const products = data?.data || [];
  // Decide what to render
  let content;
  if (products.length === 0) {
    content = <div className="text-center">No products found</div>;
  } else if (error) {
    content = <div className="text-center">{error}</div>;
  } else {
    content = <Products products={products} />;
  }
  return (
    <section className="lg:container mx-auto py-10 px-3 sm:px-5">
      {content}
    </section>
  );
};

export default ShopPage;
