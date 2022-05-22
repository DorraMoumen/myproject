import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1> Remplissez ce formulaire pour télécharger votre rapport  </h1>
      <nav>
        <NavLink activeClassName="active" to="/" exact={true}>
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/list">
          Files List
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
