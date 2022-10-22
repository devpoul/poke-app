import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/CardPoke.css";

const CardPoke = ({ url }) => {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokedex/${pokemon.id}`);
  };

  return (
    <article className={`cardPoke border-${pokemon?.types[0].type.name}`} onClick={handleClick}>
      <header className={`cardPokeHeader bg-${pokemon?.types[0].type.name}`}>
        <img
          className="cardPokeSprite"
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </header>

      <section className="cardPokeBody">
        <h3 className={`cardPokeName letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
        <ul className="cardPokeTypesContainer">
          {pokemon?.types.map((type) => (
            <li className="cardPokeType" key={type.slot}>
              {type.type.name}
            </li>
          ))}
        </ul>

        <p className="cardPokeTypeLabel">Type</p>
      </section>
      <ul className="cardPokeStatsContainer">
        {pokemon?.stats.map((stat) => (
          <li className="cardPokeStat" key={stat.stat.name}>
            <span className="cardPokeStatLabel">{stat.stat.name}</span>
            <span className={`cardPokeStatNumber letter-${pokemon?.types[0].type.name}`}>{stat.base_stat}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default CardPoke;
