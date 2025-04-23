import { GetProducts } from "@/api/products.api";
import { IProduct } from "@/types/product.type";
import Product from "./_components/Product";

const ShopPage = async () => {
  const { data, error } = await GetProducts();
  const products = data?.data || [];
  // Decide what to render
  let content;
  if (products.length === 0) {
    content = <div className="text-center">No products found</div>;
  } else if (error) {
    content = <div className="text-center">{error}</div>;
  } else {
    content = (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {products.map((pd: IProduct) => (
          <Product key={pd.id} product={pd} />
        ))}
      </div>
    );
  }

  return content;
};

export default ShopPage;
