import { getProductById } from "@/api/products.api";
import getProductImage from "@/lib/getProductImage";
import AddToCartAction from "./_components/AddToCartAction";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { data } = await getProductById(parseInt(id));
  const {
    name,
    short_desc,
    image,
    price = 0,
    stock,

    discount_amount = "0",
    category,
  } = data || {};
  const pdImg = getProductImage(image as string);
  return (
    <div className="lg:container mx-auto py-10 max-md:px-3">
      <div className="flex flex-col md:flex-row md:gap-7 xl:gap-10 items-center justify-between">
        <div className="w-full lg:w-2/5">
          <img
            src={pdImg}
            alt={name}
            className="w-full h-[270px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-lg object-cover"
          />
        </div>
        <div className="w-full lg:w-3/5 flex flex-col items-start justify-start">
          <h2 className="text-2xl font-semibold max-md:mt-4">{name}</h2>
          <p className="mt-3 text-[15px] text-gray-600 font-semibold">
            {" "}
            Category:{" "}
            <span className="text-indigo-600"> {category?.name} </span>{" "}
          </p>
          <p className="text-gray-700 mt-4 text-[15px]">{short_desc}</p>
          <p className="text-sm mt-2 font-medium text-indigo-600 opacity-60 line-through mr-1">
            &#2547;
            {price}
          </p>
          <p className="text-xl font-medium text-indigo-600 ">
            &#2547;
            {price - parseInt(discount_amount)}
          </p>
          <p className="mt-4 text-indigo-700 font-medium"> {stock} in stock </p>
          {/* add to cart */}
          <AddToCartAction product={data} />
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
