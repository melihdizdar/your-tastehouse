import './index.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import ContactScreen from './screens/ContactScreen';
import ProductsScreen from './screens/ProductsScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <NavBar/>
        <main>
          <Route path="/" component={HomeScreen} exact/>
          <Route path="/contact" component={ContactScreen}/>
          <Route path="/products" component={ProductsScreen}/>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
