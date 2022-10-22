import React from "react";
import FormHome from "../components/home/FormHome";
import "./styles/Home.css";

const Home = () => {
  return (
    <article className="pokedex">
      <img className="pokedexImg" src="/images/home/logo.svg" alt="" />

      <div className="pokedexContainerHeader">
        <header className="pokedexHeader">
          <h1 className="pokedexTitle">¡ Hi Trainer !</h1>
          <h2 className="pokedexSubtitle">Welcome to the pokedex</h2>
        </header>

        <p className="pokedexText">Give me your name to see the pokedex</p>
        <FormHome />
      </div>
    </article>
  );
};

export default Home;
