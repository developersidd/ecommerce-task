import api from ".";

const GetProducts = async () => {
  try {
    const response = await api.get("/api/all/product/get");
    return {
      data: response.data?.data,
    };
  } catch (error: any) {
    return {
      error: error.response?.data?.message || "Something went wrong",
    };
  }
};

export { GetProducts };
