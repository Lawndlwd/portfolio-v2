import { App } from "./App";
import { createBrowserRouter } from "react-router-dom";
import { Preview } from "./sections/Preview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "works/:id",
    element: <Preview />,
  },
]);
