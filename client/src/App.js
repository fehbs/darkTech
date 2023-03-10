import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";
import ProductsScreen from "./screens/ProductsScreen";
import Footer from "./components/Footer";
import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingScreen />}></Route>
            <Route path="/products" element={<ProductsScreen />}></Route>
            <Route path="/product/:id" element={<ProductScreen />}></Route>
            <Route path="/cart" element={<CartScreen />}></Route>
            <Route path='/login' element={<LoginScreen />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
