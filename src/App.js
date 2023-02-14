import './App.css';
import Home from './pages/Home';
import Cartes from './pages/Cartes';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cartes' element={<Cartes />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
