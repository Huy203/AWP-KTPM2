/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as userProfileImport } from './routes/(user)/profile'
import { Route as authRegisterImport } from './routes/(auth)/register'
import { Route as authLoginImport } from './routes/(auth)/login'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const userProfileRoute = userProfileImport.update({
  id: '/(user)/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const authRegisterRoute = authRegisterImport.update({
  id: '/(auth)/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const authLoginRoute = authLoginImport.update({
  id: '/(auth)/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/login': {
      id: '/(auth)/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof authLoginImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/register': {
      id: '/(auth)/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof authRegisterImport
      parentRoute: typeof rootRoute
    }
    '/(user)/profile': {
      id: '/(user)/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof userProfileImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/login': typeof authLoginRoute
  '/register': typeof authRegisterRoute
  '/profile': typeof userProfileRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/login': typeof authLoginRoute
  '/register': typeof authRegisterRoute
  '/profile': typeof userProfileRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/(auth)/login': typeof authLoginRoute
  '/(auth)/register': typeof authRegisterRoute
  '/(user)/profile': typeof userProfileRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/login' | '/register' | '/profile'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/login' | '/register' | '/profile'
  id:
    | '__root__'
    | '/'
    | '/(auth)/login'
    | '/(auth)/register'
    | '/(user)/profile'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  authLoginRoute: typeof authLoginRoute
  authRegisterRoute: typeof authRegisterRoute
  userProfileRoute: typeof userProfileRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  authLoginRoute: authLoginRoute,
  authRegisterRoute: authRegisterRoute,
  userProfileRoute: userProfileRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/(auth)/login",
        "/(auth)/register",
        "/(user)/profile"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/(auth)/login": {
      "filePath": "(auth)/login.tsx"
    },
    "/(auth)/register": {
      "filePath": "(auth)/register.tsx"
    },
    "/(user)/profile": {
      "filePath": "(user)/profile.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
