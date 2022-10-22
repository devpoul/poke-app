import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserNameGlobal } from "../../store/slices/userName.slice";
import "./styles/FormHome.css";

const FormHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
    dispatch(setUserNameGlobal(event.target.firstChild.value.trim()));
    navigate("/pokedex");
  };

  return (
    <form className="pokedexForm" onSubmit={submit}>
      <input
        className="pokedexInput"
        type="text"
        placeholder="Enter your Name"
      />
      <label className="pokedexLabel">Enter your name</label>
      <button className="pokedexBtn">
        <div className="default-btn">
          <span>Catch them all</span>
        </div>

        <div className="hover-btn">
          <span>! Let's go ¡</span>
        </div>
      </button>
    </form>
  );
};

export default FormHome;
