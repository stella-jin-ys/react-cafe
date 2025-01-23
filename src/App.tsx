import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Payment from "./pages/Payment";
import Menu from "./pages/Menu";
import ProductPage from "./pages/ProductPage";
import { CartProvider } from "./components/CartContext";
import Contact from "./pages/Contact";

function App() {
  return (
    <CartProvider>
      <Router basename="/react-cafe">
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
