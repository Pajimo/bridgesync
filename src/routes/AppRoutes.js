import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from ".";
import React from "react";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
