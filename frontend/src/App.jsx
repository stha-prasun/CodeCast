import React from "react";
import Login from "./components/auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
