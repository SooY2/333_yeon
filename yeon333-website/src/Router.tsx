import { createBrowserRouter } from 'react-router-dom';
import Onboarding from './pages/Onboarding';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Onboarding />,
  },
]);

export default router;
