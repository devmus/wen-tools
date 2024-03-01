import React from 'react';
import logo from "/src/assets/images/logo.png";

export const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img src={logo} alt="WEN tools logo"/>
      </div>
    </header>
  )
}