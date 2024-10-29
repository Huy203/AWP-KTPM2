import { useParams } from "react-router-dom";
import { useGetPhotoDetail } from "../hooks/usePhoto";
import { Indicator } from "../components/Indicator";

export default function DetailPhoto() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetPhotoDetail(id ?? "");
  if (isLoading) return <Indicator />;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="container mx-auto p-4 max-w-screen-md">
      <div className="flex flex-col items-center">
        <img
          src={data.urls.full}
          alt={data.alt_description || "Photo"}
          loading="eager"
          className="w-full h-auto shadow-lg mb-4"
        />
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">
          {data.alt_description || "Untitled Photo"}
        </h1>
        <p className="text-lg text-gray-500 mb-4">
          Author name: {data.user.name}
        </p>
        <p className="text-md text-gray-700">
          {data.description || "No description available."}
        </p>
      </div>
    </div>
  );
}
