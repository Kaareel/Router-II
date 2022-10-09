import Navbar from "./componentes/Navbar";
import Home from "./componentes/Home";
import Pokemones from "./componentes/Pokemones";
import PokemonView from "./componentes/PokemonView";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/pokemones" element={<Pokemones />}/>
        <Route path="/pokemones/:name" element={<PokemonView/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
