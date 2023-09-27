import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./assets/css/global.css";
import ProtectedRoute from "./components/routes/ProtectedRoute";

const Login = lazy(() => import("./pages"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Page404 = lazy(() => import("./pages/404"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/chat",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

const App = () => {
  return <RouterProvider router={router} fallbackElement={<>Loading ...</>} />;
};

export default App;
