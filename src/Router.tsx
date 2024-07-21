import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {LandingPage} from './components/Landing/LandingPage.tsx';
import {StorePage} from './components/Store/StorePage.tsx';
import {ItemPage} from './components/Items/ItemPage.tsx';
import {CheckoutPage} from './components/Checkout/CheckoutPage.tsx';
import {App} from './App.tsx';
import {ErrorPage} from './components/ErrorPage/ErrorPage.tsx';

export function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <LandingPage />,
        },
        {
          path: '/home',
          element: <LandingPage />,
        },
        {
          path: '/store',
          element: <StorePage />,
        },
        {
          path: '/store/:itemId',
          element: <ItemPage />,
        },
        {
          path: '/checkout',
          element: <CheckoutPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
