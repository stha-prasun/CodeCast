import React from "react";
import Login from "./components/auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./components/auth/Signup";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
