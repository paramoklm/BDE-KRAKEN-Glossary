import './App.css';
import Home from './pages/Home';
import Cartes from './pages/Cartes';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Membres from './pages/Membres';
import Planning from './pages/Planning';
import Events from './pages/Events';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/membres' element={<Membres />}></Route>
        <Route path='/cartes' element={<Cartes />}></Route>
        <Route path='/planning' element={<Planning />}></Route>
        <Route path='/events' element={<Events />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
