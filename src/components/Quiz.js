import React from 'react'
import styled from 'styled-components'

function Quiz() {
    return (
        <Container>
            <Wrapper>
        <h2>Not sure what you want to learn? Check out featured cities!</h2>
        <Display>
          <div className="container">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.xm_BuUQnbBRvSqBOoJCdggHaFj%26pid%3DApi&f=1"
              alt=""
            />
            <p> Easy </p>
          </div >
          <div className="container" >
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Wuo7YaWL2GLh-c8msyGqiwHaDu%26pid%3DApi&f=1"
              alt=""
            />
            <p>Medium</p>
          </div>
        </Display>
        <Display>
          <div className="container">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.OgkUAu5czVNgzwDtA0JJTgHaDF%26pid%3DApi&f=1"
              alt=""
            />
            <p>Hard</p>
          </div >
          <div className="container" >
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SA6EiyiiJiZAGtJni5osSwHaGD%26pid%3DApi&f=1"
              alt=""
            />
            <p>Random</p>
          </div>
        </Display>

        <Buttons>
            <div className="btncontainer">
                <h1>Wanna see your Competition?</h1>
                <button>Check LeaderBoard</button>
            </div>
            <div className="btncontainer">
                <h1>Need Extra Points ?</h1>
                <button>Engage in Community</button>
            </div>

        </Buttons>
       
      </Wrapper>
        </Container>
    )
}

export default Quiz
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height:150vh;
`

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Display = styled.div`
  margin-top:40px;
  display:flex;
  justify-content:center;
  align-items:center;
  .container{
    width: 450px;
    height: 250px;
    img{
        width:100%;
        height:100%;
    }
    p{
        z-index:100;
        text-align:center;
        margin-top: 10px;
    }
  }
  &:nth-child(2){
    margin-top: 45px;
  }
  
`;
const Buttons = styled.div`
  margin-top:40px;
  
  .btncontainer{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-top:40px;
    margin-bottom:40px;
    button{
        width: 250px;
        height: 60px;
        border:none;
        border-radius:4px;
        cursor: pointer;
        outline: none;
        transition:0.5s;
        &:hover{
            background:gray;
            transition:0.5s;
        }
    }
  }

`

