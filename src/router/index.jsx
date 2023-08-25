import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "../pages/List";
import Photo from "../pages/Photo";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Photo />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;