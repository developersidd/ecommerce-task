import { getProducts } from "@/api/products.api";
import BannerSlider from "./_components/BannerSlider";
import ProductsSection from "./_components/ProductsSection";

const Home = async () => {
  const { data, error } = await getProducts();
  return (
    <main>
      <BannerSlider />
      <ProductsSection products={data?.data} />
    </main>
  );
};

export default Home;
