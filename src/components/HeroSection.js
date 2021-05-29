import React from 'react'
import styled from 'styled-components'


const HeroSection = () => {
    return(
    <Container>
      <h1>Explore the cultures in a fun and engaging way!</h1>
      <div className="info">
        <div className="wrapper">
          <img src="/assets/svg/auto_stories_black_24dp.svg" alt="" />
          <p>Learn about different places</p>
        </div>
        <div className="wrapper">
        <img src="/assets/svg/rule_black_24dp.svg" alt="" />
          <p>Learn about different places</p>
        </div>
        <div className="wrapper">
        <img src="/assets/svg/share_black_24dp.svg" alt="" />
          <p>Learn about different places</p>
        </div>
      </div>
      
    </Container>
    )
}

export default HeroSection;

const Container = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  width: 1366px;
  height: 521px;
  background:url(/assets/hero_holi.png) no-repeat;
  background-size: cover;
  opacity: 1;
  h1{
    margin-top:4rem;
    width: 762px;
    height: 135px;
    text-align: center;
    font: normal normal normal 48px/73px Monarcha;
    letter-spacing: 1.68px;
    color: #F2F5F7;
    opacity: 1;
    margin-bottom:40px; 
  }
  .info{
    display:flex;
    display:grid;
      grid-template-columns:1fr 1fr 1fr;
      gap: 10rem;

    .wrapper{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      

      img{
        margin-bottom: 35px;

        background: transparent url('img/auto_stories_black_24dp.png') 0% 0% no-repeat padding-box;
        opacity: 1;
      }
      p{
        width: 198px;
        height: 55px;
        text-align: center;
        font: normal normal normal 18px/32px Monarcha;
        letter-spacing: 0.63px;
        color: #F2F5F7;
        opacity: 1;
      }
    }
  }

`