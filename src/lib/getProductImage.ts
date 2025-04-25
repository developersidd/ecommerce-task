const getProductImage = (url: string) => {
  return `${process.env.NEXT_PUBLIC_API_URL}/storage/product/${url}`;
};

export default getProductImage;
