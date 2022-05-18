import React from "react";
import Casestudy from "pages/Casestudy";
import Homepage from "pages/Homepage";
import ProductDetail from "pages/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/casestudy" element={<Casestudy />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
