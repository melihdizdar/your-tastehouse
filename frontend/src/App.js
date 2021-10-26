import './index.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import ContactScreen from './screens/ContactScreen';
import ProductsScreen from './screens/ProductsScreen';
import HandmadeScreen from './screens/HandmadeScreen';
import OrganicScreen from './screens/OrganicScreen';
import BosnianPastryScreen from './screens/BosnianPastryScreen';
import TurkishRavioliScreen from './screens/TurkishRavioliScreen';
import StuffedMeatBallsScreen from './screens/StuffedMeatBallsScreen';
import StuffedDishScreen from './screens/StuffedDishScreen';
import MuhammaraScreen from './screens/MuhammaraScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <NavBar/>
        <main>
          <Route path="/" component={HomeScreen} exact/>
          <Route path="/contact" component={ContactScreen}/>
          <Route path="/products" component={ProductsScreen}/>
          <Route path="/handmade" component={HandmadeScreen}/>
          <Route path="/organic" component={OrganicScreen}/>
          <Route path="/bosnianpastry" component={BosnianPastryScreen}/>
          <Route path="/turkishravioli" component={TurkishRavioliScreen}/>
          <Route path="/stuffedmeatballs" component={StuffedMeatBallsScreen}/>
          <Route path="/stuffeddish" component={StuffedDishScreen}/>
          <Route path="/muhammara" component={MuhammaraScreen}/>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
