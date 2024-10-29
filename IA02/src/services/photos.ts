import api from "./api";

const getPhotos = async ({ page }: { page: number }) => {
  try {
    const response = await api.get(`/photos?page=${page}`);
    return {
      items: response.data,
      page,
    };
  } catch (error: any) {
    return {
      items: [],
      page,
      error:
        error.response.status === 403 ? error.response.data : error.message,
    };
  }
};

const getPhotoDetail = async ({ id }: { id: string }) => {
  const response = await api.get(`/photos/${id}`);
  return response.data;
};

export { getPhotos, getPhotoDetail };
