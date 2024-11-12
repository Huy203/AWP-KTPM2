import { Indicator } from '@/components/Indicator';
import { useGetProfile } from '@/hooks/useUser';

export const Profile = () => {
    const { data, isLoading } = useGetProfile();
    if (isLoading)
        return (
            <div className="flex h-screen w-screen items-center justify-center">
                <Indicator />
            </div>
        );
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="max-h-md m-4 mx-auto max-w-md rounded-lg bg-white p-6 shadow-md">
                <h2 className="mb-4 border-b border-gray-300 pb-2 text-xl text-gray-800">
                    User Profile
                </h2>
                <div className="flex justify-between py-2">
                    <span className="font-semibold text-gray-600">
                        Username:
                    </span>
                    <span className="text-gray-500">{data?.username}</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="font-semibold text-gray-600">Email:</span>
                    <span className="text-gray-500">{data?.email}</span>
                </div>
            </div>
        </div>
    );
};
