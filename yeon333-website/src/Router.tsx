import { createBrowserRouter } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import CommonLayout from './components/Common/Layout/CommonLayout';
import Team from './pages/Team';
import WorkNote from './pages/WorkNote';

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
      {
        path: '/work-note',
        element: <WorkNote />,
      },
    ],
  },
]);

export default router;
