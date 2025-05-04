import { createBrowserRouter } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import CommonLayout from './components/Common/Layout/CommonLayout';
import Team from './pages/Team';

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
        path: '/team',
        element: <Team />,
      },
    ],
  },
]);

export default router;
