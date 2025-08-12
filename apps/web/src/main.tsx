import { config } from '@kovyra/theme';
import { TamaguiProvider } from '@kovyra/ui';
import {
  Link,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import TanStackQueryLayout from './integrations/tanstack-query/layout.tsx';

import * as TanStackQueryProvider from './integrations/tanstack-query/root-provider.tsx';

import App from './App.tsx';

// Simple Layout Component
function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-xl font-bold text-gray-900">
                Kovyra
              </Link>

              <nav className="flex space-x-4">
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  🏠 Dashboard
                </Link>
                <Link
                  to="/money"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  💰 Money
                </Link>
                <Link
                  to="/travel"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  ✈️ Travel
                </Link>
                <Link
                  to="/tasks"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  ✅ Tasks
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <TanStackRouterDevtools />
      <TanStackQueryLayout />
    </div>
  );
}

// Simple App Pages
function MoneyApp() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">💰 Money App</h1>
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <p className="text-gray-600">Your financial dashboard will be here.</p>
      </div>
    </div>
  );
}

function TravelApp() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">✈️ Travel App</h1>
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <p className="text-gray-600">Your travel planning will be here.</p>
      </div>
    </div>
  );
}

function TaskApp() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">✅ Task App</h1>
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <p className="text-gray-600">Your task management will be here.</p>
      </div>
    </div>
  );
}

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
});

const moneyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/money',
  component: MoneyApp,
});

const travelRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/travel',
  component: TravelApp,
});

const tasksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tasks',
  component: TaskApp,
});

const routeTree = rootRoute.addChildren([indexRoute, moneyRoute, travelRoute, tasksRoute]);

const TanStackQueryProviderContext = TanStackQueryProvider.getContext();
const router = createRouter({
  routeTree,
  context: {
    ...TanStackQueryProviderContext,
  },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('app');
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <TanStackQueryProvider.Provider {...TanStackQueryProviderContext}>
        <TamaguiProvider config={config}>
          <RouterProvider router={router} />
        </TamaguiProvider>
      </TanStackQueryProvider.Provider>
    </StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
