import React from "react";
import { useNavigate } from "react-router-dom";
import './styles/InputSearch.css'

const InputSearch = () => {
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
    navigate(`/pokedex/${event.target.search.value.trim().toLowerCase()}`);
  };

  return (
    <form className="formInput" onSubmit={submit}>
      <input id="search" className="inputSearch" type="text" placeholder="Search pokemon" />
      <span className="input-border" ></span>
      <button className="formButton">Search</button>
    </form>
  );
};

export default InputSearch;
