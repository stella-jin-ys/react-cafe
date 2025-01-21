import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Payment from "./Payment";
import Menu from "./Menu";
import ProductPage from "./ProductPage";
import Contact from "./Contact";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
