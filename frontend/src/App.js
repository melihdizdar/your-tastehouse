import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <main>
          <Routes>
            <Route exact path="/" element={<HomeScreen/>}/>
          </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;
