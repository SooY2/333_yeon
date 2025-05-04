import { createBrowserRouter } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import CommonLayout from './components/Common/Layout/CommonLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CommonLayout />,
    children: [
      {
        path: '/',
        element: <Onboarding />,
      },
      {
        path: '/about',
        element: <>소개페이지</>,
      },
    ],
  },
]);

export default router;
