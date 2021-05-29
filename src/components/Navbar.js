import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
        </ul>
        <form className="form-inline my-2 my-lg-0 form">
          <Link>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick = {handleSignOut} onClick = {logout}>
            <p>Surprize!</p>
          </button>
          </Link>
          
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
  .btn{
    width: 162px;
    height: 54px;
    background: #EDB818 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 8px;
    opacity: 1;
  }
  p{
    width: 72px;
    height: 20px;
    text-align: center;
    font: normal normal normal 18px/21px Arial;
    letter-spacing: 0px;
    color: #F2F5F7;
    opacity: 1;
    margin: auto;
  }

`