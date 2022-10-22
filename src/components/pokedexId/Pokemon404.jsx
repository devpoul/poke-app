import React from "react";
import { useNavigate } from "react-router-dom";
import './styles/Pokemon404.css'

const Pokemon404 = () => {
  // reemplaza al <Link /> porque da error
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/pokedex`);
  };
  // finaliza este apartado

  return (
    <div className="errorContainer">
      <button className="returnBtn" onClick={handleClick}>Return to pokedex</button>
      <h1>ERROR 404</h1>
      <h1 className="errorText2">Pokemon is not found</h1>
    </div>
  );
};

export default Pokemon404;
