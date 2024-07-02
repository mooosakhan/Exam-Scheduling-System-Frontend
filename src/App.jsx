import React from "react";
import Login from "./pages/login";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Login Route */}
          <Route
            path="/login"
            element={<Login />}
          />

          {/* Dashboard Route */}
          <Route
            path="/*"
            element={<Dashboard />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
