import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root";
import { ErrorPage } from "./error-page";
import { Contact } from "./routes/contact";
import App from "./App";
import { Learn } from "./Learn";
import { Ajax } from "./Ajax";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
      {
        path: "learn/",
        element: <Learn />,
      },
      { path: "ajax", element: <Ajax /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
