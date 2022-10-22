import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/shared/Footer";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokedexById from "./pages/PokedexById";
import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {



  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* Pokedex y PokemonById son rutas protegidas y deben estar anidadas en una ruta padre que es ProtectedRoutes */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokedexById />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
