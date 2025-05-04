import { createBrowserRouter } from 'react-router-dom';
import Onboarding from './pages/Onboarding';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Onboarding />,
  },
  {
    path: '/about',
    element: <>소개페이지</>,
  },
]);

export default router;
