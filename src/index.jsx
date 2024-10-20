import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Dashboard from "./pages/Dashboard";
import Bills from "./pages/Bills";
import { Provider } from "react-redux";
import store from './store'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "Dashboard",
        element: <Dashboard />,
      },
      {
        path: "Dashboard",
        element: <Dashboard />,
      },
      {
        path: "Faturas",
        element: <Bills />,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);