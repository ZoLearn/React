import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../views/Home';
import Menu from '../views/Menu';
import About from '../views/About';
import Status from '../views/Status';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/status',
    element: <Status />,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
