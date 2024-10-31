import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Suspense } from 'react';

export const Route = createRootRoute({
  component: () => (
    <main>
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </main>
  )
});
