import { toast } from '@/hooks/use-toast';
import { AuthContext } from '@/lib/providers/auth.provider';
import { QueryClient } from '@tanstack/react-query';
import {
    createRootRouteWithContext,
    Outlet,
    redirect
} from '@tanstack/react-router';
import { ContextType } from 'react';

export type RouterContext = {
    auth?: ContextType<typeof AuthContext>;
    queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RouterContext>()({
    beforeLoad({ context }) {
        const isAuthPage = ['/login', '/register'].includes(location.pathname);
        console.log('isAuthPage', isAuthPage);
        console.log('context.auth', context.auth);
        console.log('context.auth?.isExpired', context.auth?.isExpired);
        if ((context.auth?.isExpired || !context.auth) && !isAuthPage) {
            toast({
                variant: 'info',
                title: 'Your session has expired. Please log in again to continue.'
            });
            throw redirect({
                to: '/login'
            });
        }
    },
    component: () => (
        <div>
            <Outlet />
            {/* <TanStackRouterDevtools position="bottom-right" /> */}
        </div>
    )
});
