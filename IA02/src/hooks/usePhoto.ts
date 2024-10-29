import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getPhotoDetail, getPhotos } from "../services/photos";

function useGetPhotos() {
  return useInfiniteQuery({
    queryKey: ["photos"],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => {
      return getPhotos({ page: pageParam as number });
    },
    getNextPageParam: (lastPage: any) => {
      if (lastPage.error) return undefined;
      return lastPage.page + 1;
    },
    staleTime: 1000 * 60 * 1,
  });
}

function useGetPhotoDetail(id: string) {
  return useQuery({
    queryKey: ["photoDetail", id],
    queryFn: async () => {
      return getPhotoDetail({ id });
    },
  });
}

export { useGetPhotos, useGetPhotoDetail };
