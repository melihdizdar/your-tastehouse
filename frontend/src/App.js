import './index.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import NavBar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <NavBar/>
        </header>
        <main>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
