import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile";
import { Auth0Provider } from "@auth0/auth0-react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Administration } from "./pages/Administration";
import { PaintFinder } from "./pages/PaintFinder";
import WelcomePage from "./pages/WelcomePage";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "administration",
        element: (
          <ProtectedRoute>
            <Administration />
          </ProtectedRoute>
        ),
      },
      {
        path: "paintFinder",
        element: (
          <ProtectedRoute>
            <PaintFinder />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "welcomePage",
        element: (
          <ProtectedRoute>
            <WelcomePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-h3i7y85207cek8za.us.auth0.com"
    clientId="gkB7T3Dr8AhofwEyXDlnMMzoIYtLfQyW"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Auth0Provider>
);
