import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";


const App: React.FC = () => {
  return <div>
          <Routes>
            <Route path="/" element={<Contact />}></Route>
          </Routes>
         </div>;
}

export default App;
