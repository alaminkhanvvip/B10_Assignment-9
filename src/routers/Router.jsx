import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Campaigns from '../pages/Campaigns';
import CampaignDetails from '../pages/CampaignDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import UpdateProfile from '../pages/UpdateProfile';
import ForgotPassword from '../pages/ForgotPassword';
import HowToHelp from '../pages/HowToHelp';
import NotFound from '../pages/NotFound';
import PrivateRoute from '../components/PrivateRoute';

// Route constants for maintainability
export const ROUTES = {
  HOME: '/',
  CAMPAIGNS: '/campaigns',
  CAMPAIGN_DETAILS: '/campaign/:id',
  HOW_TO_HELP: '/how-to-help',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  DASHBOARD: '/dashboard',
  UPDATE_PROFILE: '/update-profile',
  NOT_FOUND: '*'
};

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: ROUTES.CAMPAIGNS,
        element: <Campaigns />
      },
      {
        path: ROUTES.HOW_TO_HELP,
        element: <HowToHelp />
      },
      {
        path: ROUTES.LOGIN,
        element: <Login />
      },
      {
        path: ROUTES.REGISTER,
        element: <Register />
      },
      {
        path: ROUTES.FORGOT_PASSWORD,
        element: <ForgotPassword />
      },
      {
        path: ROUTES.CAMPAIGN_DETAILS,
        element: (
          <PrivateRoute>
            <CampaignDetails />
          </PrivateRoute>
        )
      },
      {
        path: ROUTES.DASHBOARD,
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        )
      },
      {
        path: ROUTES.UPDATE_PROFILE,
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        )
      },
      {
        path: ROUTES.NOT_FOUND,
        element: <NotFound />
      }
    ]
  }
]);

export default router;