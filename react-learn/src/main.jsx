import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import Chat from './learn-ref/11.jsx'
import Toggle from './learn-ref/12.jsx'

import './index.css'
import Root from './Root.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/app",
        element: <App />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/toggle",
        element: <Toggle />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
