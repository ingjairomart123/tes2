import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './styledHeader';


function Navigation() {
  return (
    <Header>
      <header className="header">

        <a className="logo">Colmerck</a>

        {/* <div className="social">
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-youtube"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          <a href="#"><i className="fa-brands fa-telegram"></i></a>
        </div>  */}

        <nav className="navbar">
          <a> <Link to="/">Home</Link></a>
          <a href="#">Services</a>
          <a><Link to="/about">About</Link></a>
          <a href="#">Contact</a>
        </nav>
      </header>
    </Header>
  );


}

export default Navigation;