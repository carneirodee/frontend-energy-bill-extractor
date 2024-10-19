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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "Dashboard",
        element: <Dashboard/>,
      },
      {
        path: "Faturas",
        element: <Bills/>,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root") as ReactDOM.Container).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);