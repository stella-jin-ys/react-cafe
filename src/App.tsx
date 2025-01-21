import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Review from "./components/Review";

const App: React.FC = () => {
  return <div>
          <Routes>
            <Route path="/" element={<Contact />}></Route>
            <Route path="/review" element={<Review />}></Route>
          </Routes>
         </div>;
}

export default App;
