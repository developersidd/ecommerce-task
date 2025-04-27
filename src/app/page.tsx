import { getProducts } from "@/api/products.api";
import BannerSlider from "./_components/BannerSlider";
import ProductsSection from "./_components/ProductsSection";

const Home = async () => {
  const { data, error } = await getProducts();
  return (
    <main>
      <BannerSlider />
      {error ? (
        <div className="flex items-center justify-center h-screen">
          <h2 className="text-2xl font-semibold text-red-500">
            Something went wrong!
          </h2>
        </div>
      ) : (
        <ProductsSection products={data?.data} />
      )}
    </main>
  );
};

export default Home;
