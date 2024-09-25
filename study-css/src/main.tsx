import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App.tsx";
import { Layout } from "./Layout.tsx";
import "./index.css";
import { Page1 } from "./Page1.tsx";
import { Sanmoku } from "./Sanmoku/Sanmoku.tsx";
import { Slay } from "./slay/Slay.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Layout />,
    children: [
      {
        path: "/main",
        element: <App />,
      },
      {
        path: "/about",
        element: <Page1 />,
      },
      {
        path: "/sanmoku",
        element: <Sanmoku />,
      },
      {
        path: "/slay",
        element: <Slay />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
