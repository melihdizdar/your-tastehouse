import './index.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <NavBar/>
        <main>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
