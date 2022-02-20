import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";
import ProductsScreen from "./screens/ProductsScreen";

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <main>
          <Routes>
            <Route exact path="/" element={<HomeScreen/>}/>
            <Route path="/products" element={<ProductsScreen/>}/>
          </Routes>
        </main>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
