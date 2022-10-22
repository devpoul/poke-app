import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import CardPoke from "../components/pokedex/CardPoke";
import InputSearch from "../components/pokedex/InputSearch";
import SelectByType from "../components/pokedex/SelectByType";
import './styles/Pokedex.css'
import Header from "../components/shared/Header";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState();
  const [typeSelected, setTypeSelected] = useState("All Pokemons");

  useEffect(() => {
    if (typeSelected !== "All Pokemons") {
      // si se seleccionó un tipo
      axios
        .get(typeSelected)
        .then((res) => {
          const result = res.data.pokemon.map((event) => event.pokemon);
          setPokemons(result);
        })
        .catch((err) => console.log(err));
    } else {
      // si quiero todos los pokemons
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";
      axios
        .get(URL)
        .then((res) => setPokemons(res.data.results))
        .catch((err) => console.log(err));
    }
  }, [typeSelected]);

  const userName = useSelector((state) => state.userName);

  return (
    <div className="pokedexContainer">
      <Header />
      <header className="pokedexHeader">
        <p className="pokedexHeaderText">
          Welcome <span>{userName},</span> here you can find your favorite
          pokemon.
        </p>
      </header>

      <aside className="pokedexAside">
        <InputSearch />
        <SelectByType setTypeSelected={setTypeSelected} />
      </aside>

      <main>
        <div className="cardContainer">
          {pokemons?.map((pokemon) => (
            <CardPoke key={pokemon.url} url={pokemon.url} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Pokedex;
