import { createFileRoute } from '@tanstack/react-router';
import { useLogout } from '../hooks/useAuth';

function HomeComponent() {
    const logOut = useLogout();
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center">
            <h1 className="my-4 text-center text-2xl font-semibold">
                Home Page
            </h1>
            <button
                onClick={() => logOut.mutate()}
                className="focus:shadow-outline w-fit rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            >
                Log out
            </button>
        </div>
    );
}

export const Route = createFileRoute('/')({
    component: HomeComponent
});
