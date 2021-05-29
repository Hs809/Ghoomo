import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function SearchBar({culture}) {
    useEffect(() => {

    }) 
  
  
    const refreshPage = ()=>{
      window.location.reload();
   }
   function videoplay() {
    var video = document.getElementById("myVideo");
    video.onplay()
   }
 

  
  
  return (
    <Container>
      <video  autoPlay loop id="myVideo" onLoad = {videoplay}>
      <source src="assets/Confetti - 61014.mp4" type="video/mp4" />
    </video>
      <button onClick = {refreshPage}>Click me For the Surprize</button>
      <div id="map"></div>
      
      
    </Container>
  );
}

export default SearchBar;

const Container = styled.div`

overflow-x:hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height:80vh;
  video{
    width:100%;
  }
  #map{
    position:absolute;
  }
  button{
    position: absolute;
    left: 40px;
    width: 250px;
    top: 94px;
  }
`;
