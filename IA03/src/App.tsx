import {
    QueryCache,
    QueryClient,
    QueryClientProvider
} from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';

import { ToastContainer } from 'react-toastify';
import { routeTree } from './routeTree.gen';

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
    context: { queryClient }
});

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ToastContainer />
        </QueryClientProvider>
    );
}

export default App;
