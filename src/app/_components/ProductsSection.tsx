import Products from "@/components/custom/product/Products";
import { IProduct } from "@/types/product.type";

type ProductsSectionProps = {
  products: IProduct[];
};

const ProductsSection = ({ products }: ProductsSectionProps) => {
  return (
    <section className="lg:container px-4 mx-auto my-10 md:my-12 xl:my-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 text-center mb-5 md:mb-8 xl:mb-10">
        Our Products
      </h2>
      <Products products={products} />
    </section>
  );
};

export default ProductsSection;
