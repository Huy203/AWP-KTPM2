import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useLogout } from '../hooks/useAuth';

function HomeComponent() {
    const navigate = useNavigate();
    const logOut = useLogout();

    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center space-y-4">
            <h1 className="text-center text-2xl font-semibold">Home Page</h1>

            <button
                onClick={() => navigate({ to: '/profile' })}
                className="rounded-lg bg-green-500 px-6 py-2 text-lg text-white transition hover:bg-green-700"
            >
                Go to Profile
            </button>

            <button
                onClick={() => logOut.mutate()}
                className="w-fit rounded bg-blue-500 px-6 py-2 font-bold text-white transition hover:bg-blue-700 focus:outline-none"
            >
                Log Out
            </button>
        </div>
    );
}

export const Route = createFileRoute('/')({
    component: HomeComponent
});
