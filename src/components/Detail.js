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
    fire.database().ref("culture").on("value", snapshot => {
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
      <Heading>{detailData && detailData.title}</Heading>
      <ImageWrapper1>
        <HeroImage src={detailData && detailData.img1} />
      </ImageWrapper1>
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;
const ImageWrapper1 = styled.div`
  width: 100%;
  height: 450px;
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

    width: 600px;
    height: 500px;
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
    img:nth-child(1) {
      width: 290px;
      height: 250px;
    }
    img:nth-child(2) {
      width: 290px;
      height: 250px;
    }
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background: #424242;
  div {
    height: 100px;
    width: 2px;
    background: blue;
    position: absolute;
  }
  .one {
    position: absolute;
    left: 10px;
  }
  .two {
    position: absolute;
    right: 10px;
  }
  p {
    color: white;
    text-align: center;
  }
`;
const About = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  padding:5rem; 
  
`