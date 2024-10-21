import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./routes/Layout";
import { ErrorPage } from "./error-page";
import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";
import { EditTodo } from "./components/EditTodo";
import { Ajax } from "./Ajax";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Ajax />,
      },
      {
        path: "todo",
        element: <TodoList />,
      },
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
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
