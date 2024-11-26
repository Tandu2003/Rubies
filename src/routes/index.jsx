import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
