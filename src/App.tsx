import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

import Starting from "./assets/Component/Starting";
import { Children, type PropsWithChildren } from "react";
import About from "./assets/Component/About/About";
import Contact from "./assets/Component/Contact";
import Home from "./assets/Component/Home";
import Signup from "./assets/Component/Signup/Signup";
import Counter from "./assets/Redux/Counter";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Starting />,
    children: [
      {
        path: "/",
        index: true,
        element: <Navigate to={"home"} replace={true} />,
      },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "counter", element: <Counter /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
