import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from './ProductPage'; 
import Menu from './Menu'; 


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Router>
  );
}

export default App;
