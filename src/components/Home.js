import React, { useEffect } from 'react'
import HeroSection from './HeroSection';
import ImageSlider from './ImageSlider';
import Button from './Button';
import Table from './Table';
import Footer from './Footer';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';



    
function Home({culture}) {

  
  

    return (
        <Container>
      <HeroSection />
      <div className="container">
        <img src="/assets/svg/auto_stories_purple_24dp.svg" alt="" />
        <p>Learn about different places</p>
        <div ></div>
      </div>
      <div id="react_container"></div>
   

      

      <Button btnName = "Quiz"  id = "quiz"/>
      <QuizContainer>
        <div className="wrapper">
          <Link to = "/easy">
            <div className="quizcontainer">
              <img src="/assets/easy.png" alt="" />
              <h2>Easy</h2>
            </div>
          </Link>
          
          <Link to = "/medium" >
          <div className="quizcontainer">
              <img src="/assets/medium.png" alt="" />
              <h2>Medium</h2>
            </div>
          </Link>

          <Link >
          <div className="quizcontainer">
              <img src="/assets/hard.png" alt="" />
              <h2>Hard</h2>
            </div>
          </Link>

          <Link >
          <div className="quizcontainer">
              <img src="/assets/random.png" alt="" />
              <h2>Random</h2>
            </div>
          </Link>
        </div>
      </QuizContainer>

    
      <Button btnName = "Community"  id = "community"/>
       <ImageSlider culture = {culture}  />
      
        </Container>
    )
}

export default Home

const Container = styled.div`

  .container{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    p{
      width: 422px;
      height: 42px;
      text-align: left;
      font: normal normal normal 32px/42px Monarcha;
      letter-spacing: 0px;
      color: #4C0C43;
      opacity: 1;
    }
    div{
      width: 16px;
      height: 13px;
      transform: matrix(-1, 0, 0, -1, 0, 0);
      background: #4C0C43 0% 0% no-repeat padding-box;
      opacity: 1;
    }

  }

`

const QuizContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  .wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    
  }


  img{
    border::
    
  }
  .quizcontainer{
    display:flex;
    justiy-content:center;
    align-items:center;
    flex-direction:column;
    width: 264px;
    height: 292px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #EDB818;
    border-radius: 8px;
    opacity: 1;
    margin:11px;
  }
`