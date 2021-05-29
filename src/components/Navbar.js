import React from "react";
import styled from 'styled-components'

const Navbar = ({handleSignOut, logout}) => {
  return (  
    <Navba className="navbar navbar-expand-lg  ">
      <a className="navbar-brand logocontainer" href="#">
        <img src="/assets/logotype.png" alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse links" id="navbarSupportedContent">
        <ul className="navbar-nav ">
          <li className="nav-item ">
            <a className="nav-link " href="#learn">
              Learn
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#quiz">
              Quiz
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#community">
              Community
            </a>
          </li>
          <li className="nav-item leader">
            <a className="nav-link" href="#leaderboard">
              Leader Board
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 form">
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick = {handleSignOut} onClick = {logout}>
            Sign Out
          </button>
        </form>
      </div>
    </Navba>
  );
};

export default Navbar;

const Navba = styled.nav`
  
  .logocontainer {
    width: 163px;
    height: 84px;
    img{
      width:100%;
      height:100%;
      background: transparent url('img/logotype.png') 0% 0% no-repeat padding-box;
      opacity: 1;
    }
  }

`