import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import fire from '../Firebase'


function Detail({culture}) {
  const [input, setInput] = useState("");
  const { id } = useParams();
  const [detailData, setDetailData] = useState([]);
  const [title,setTitle] = useState('');
  let studentlist = [];



  useEffect(() => {
    fire.database().ref("culture1").on("value", snapshot => {
      snapshot.forEach(snap => {
          // snap.val() is the dictionary with all your keys/values from the 'students-list' path
          if(snap.val().id == id){
             setDetailData(snap.val())
          }
      });
      
    })

  },[])

  console.log(detailData);
  
 
  

  return (
    <Container>
      <ImageWrapper1>
        <HeroImage src={detailData && detailData.img1} />
      </ImageWrapper1>
        <h1>{detailData && detailData.title}</h1>
      <ImageWrapper2>
        <div className="img1">
          <img
            src= {detailData && detailData.img2}
            alt=""
          />
        </div>
        <div className="img2">
          <img
            src= {detailData && detailData.img3}
            alt=""
          />
          <img
            src={detailData && detailData.img4}
          />
        </div>
      </ImageWrapper2>
      <Info>
        <div className="one"></div>
        <h3>Fun Fact</h3>
        <p>
         {detailData &&  detailData.funfact}
        </p>
        <div className="two"></div>
      </Info>
      <About>
        <h3>About</h3>
        <p>
        {detailData &&  detailData.info}
        </p>
      </About>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  overflow-x:hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1{
    margin-top:40px;
    width: 289px;
    height: 62px;
    text-align: left;
    font: normal normal normal 48px/62px Monarcha;
    letter-spacing: 0px;
    color: #4C0C43;
    opacity: 1;
  }
`;




const ImageWrapper1 = styled.div`
    width: 1366px;
    height: 496px;
  
`;
const HeroImage = styled.img`
  width: 100%;
  height: 100%;
`;
const ImageWrapper2 = styled.div`
  margin:20px;  
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  .img1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    width: 812px;
    height: 450px;
    margin-left:139px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .img2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    flex-direction: column;
    margin: 0;
    position: relative;
    right: 30px;
    img{
      width: 260px;
      height: 219px;
      margin-bottom:13px;
    }
    
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 1366px;
  height: 179px;
  background: #B62152 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  opacity: 1;
  h3{
    width: 130px;
  height: 42px;
  text-align: left;
  font: normal normal normal 32px/42px Monarcha;
  letter-spacing: 0px;
  color: #E2E2E2;
  opacity: 1;
  }
  div {
    width: 0px;
  height: 109px;
  border: 3px solid #FFFFFF;
  opacity: 1;
  }
  .one {
    position: absolute;
    top: 1246px;
    left: 139px;
  }
  .two {
    position: absolute;
    top: 1246px;
    left: 1227px;
  }
  p {
    width: 904px;
  height: 74px;
  text-align: center;
  font: normal normal normal 18px/28px Arial;
  letter-spacing: 0px;
  color: #E2E2E2;
  opacity: 1;
  }
`;
const About = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  padding:5rem; 
  h3{
    width: 121px;
    height: 55px;
    text-align: left;
    font: normal normal normal 42px/55px Monarcha;
    letter-spacing: 0px;
    color: #4C0C43;
    opacity: 1;
  }
  p{
    width: 1167px;
    height: 442px;
    text-align: left;
    font: normal normal normal 24px/28px Arial;
    letter-spacing: 0px;
    color: #424B5A;
    opacity: 1;
  }
`