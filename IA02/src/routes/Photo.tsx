import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetPhotos } from "../hooks/usePhoto";
import { Indicator } from "../components/Indicator";
export default function Photo() {
  const [isList, setIsList] = useState(false);
  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetPhotos();

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.offsetHeight
    ) {
      fetchNextPage();
    }
  };

  const handleImmediateFetch = () => {
    if (document.documentElement.scrollHeight <= window.innerHeight) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    handleImmediateFetch();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) return <Indicator />;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4">
      <ToggleGridList isList={isList} setIsList={setIsList} />
      <h1 className="text-2xl font-semibold text-center my-4">
        Display Photos from Unsplash and Show Photo Details
      </h1>
      <div
        className={
          isList
            ? "flex flex-col gap-4"
            : "w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        }
      >
        {data?.pages.map((page) =>
          page.items.map((item: any) => (
            <ThumbnailPhoto key={item.id} photo={item} />
          ))
        )}
      </div>
      {isFetchingNextPage && <Indicator />}
    </div>
  );
}

const ToggleGridList = ({
  isList,
  setIsList,
}: {
  isList: boolean;
  setIsList: any;
}) => {
  return (
    <button
      className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      onClick={() => setIsList(!isList)}
    >
      {isList ? "Grid View" : "List View"}
    </button>
  );
};

type ThumbnailPhotoProps = {
  photo: {
    id: string;
    urls: { thumb: string };
    alt_description: string;
    user: { username: string };
  };
};

const ThumbnailPhoto = ({ photo }: ThumbnailPhotoProps) => {
  return (
    <Link
      to={`/photos/${photo.id}`}
      className="group w-full h-full flex flex-col items-center overflow-hidden space-y-0 rounded-lg shadow-sm bg-white hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative w-full h-40 overflow-hidden">
        <img
          src={photo.urls.thumb}
          alt={photo.alt_description || "Photo thumbnail"}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <p className="p-2 text-sm text-gray-800 font-semibold group-hover:text-blue-600 transition-colors duration-300">
        {photo.user.username}
      </p>
    </Link>
  );
};
