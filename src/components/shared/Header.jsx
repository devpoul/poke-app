import React from "react";
import './styles/Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="headerRed">
        <h1>POKEDEX</h1>
        <div className="headerBlack"></div>
        <div className="headerCircle">
          <div className="headerCircleInt"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
