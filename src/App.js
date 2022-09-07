import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Product from "./components/Product/Product";
import Products from "./components/Product/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<HeroSection />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact  path="/products/:id" element={<Product/>} />
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/checkout" element={<Checkout/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
