import { IProduct } from "@/types/product.type";
import Product from "./Product";

type ProductsProps = {
  products: IProduct[];
};

const Products = ({ products }: ProductsProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
      {products.map((pd) => (
        <Product key={pd.id} product={pd} />
      ))}
    </div>
  );
};

export default Products;
