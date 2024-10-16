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
import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";
import { EditTodo } from "./components/EditTodo";

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
      {
        path: "todo",
        element: <TodoList />,
        children: [
          {
            path: "add",
            element: <AddTodo />,
          },
          {
            path: "edit/:id",
            element: <EditTodo />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
