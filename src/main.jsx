import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Fun from "./Fun/Fun.jsx";
import Work from "./Work.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/fun", element: <Fun /> },
  {
    path: "/about",
    element: (
      <>
        <h1>About</h1>
      </>
    ),
  },
  {
    path: "/work",
    element: <Work />,
  },
  {
    path: "/resume",
    element: (
      <>
        <h1>Resume</h1>
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <h1>Page Not Found!</h1>
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
