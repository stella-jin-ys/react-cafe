import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Review from "./components/Review";

const App: React.FC = () => {
  return <div>
          <Routes>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
         </div>;
}

export default App;
