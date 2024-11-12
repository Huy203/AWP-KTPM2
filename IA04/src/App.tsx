import {
    QueryCache,
    QueryClient,
    QueryClientProvider
} from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';

import { Toaster } from '@/components/ui/toaster';
import AuthProvider, { useAuthContext } from '@/lib/providers/auth.provider';
import { routeTree } from '@/routeTree.gen';

const queryClient = new QueryClient({
    defaultOptions: {},
    queryCache: new QueryCache({
        onError: (error, query) => {
            if (query.state.data !== undefined) {
                console.log(error);
            }
        }
    })
});

const router = createRouter({
    routeTree,
    context: {
        queryClient,
        auth: undefined!
    }
});

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

const Router = () => {
    const auth = useAuthContext();
    return <RouterProvider router={router} context={{ auth }} />;
};

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <Router />
                <Toaster />
            </AuthProvider>
        </QueryClientProvider>
    );
}

export default App;
