import React, { useState, useEffect } from "react";
import styled from "styled-components";
import fire from '../Firebase'


function SearchBar({culture}) {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  let studentlist = [];
  const [text,setText] = useState('')

  const  getResult = () => {
    setText(input);
   Object.values(culture).map(data => {
    
     if(data.title !== input){
    }else{
      studentlist.push(data)
      console.log(studentlist);
    }
   }) 
  }

  
  


  
  
  
  return (
    <Container>
      <Input>
        <input
          onChange={(e) => setInput(e.target.value)}
          id="inputvalue"
          value={input}
          type="text"
          placeholder="Search"

        />
        <button onClick = {() => { getResult()}}>Click Me</button>
      </Input>
      <Wrapper>
        <h2>Not sure what you want to learn? Check out featured cities!</h2>
        <Display>
          <div className="container">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GJlpOzxOOyQ5D4TIDAOqyQHaEK%26pid%3DApi&f=1"
              alt=""
            />
            <p>City 1</p>
          </div >
          <div className="container" >
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vG87Z3GDby5Xszib4hZlCAHaE7%26pid%3DApi&f=1"
              alt=""
            />
            <p>City 2</p>
          </div>
        </Display>
        <Display>
          <div className="container">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GJlpOzxOOyQ5D4TIDAOqyQHaEK%26pid%3DApi&f=1"
              alt=""
            />
            <p>City 1</p>
          </div >
          <div className="container" >
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vG87Z3GDby5Xszib4hZlCAHaE7%26pid%3DApi&f=1"
              alt=""
            />
            <p>City 2</p>
          </div>
        </Display>
        <ShowMore>
            <h3>Show More</h3>
            <i className="fas fa-angle-double-down"></i>

        </ShowMore>
      </Wrapper>
    </Container>
  );
}

export default SearchBar;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height:150vh;
`;
const Input = styled.div`
  margin-top: 68px;
  width: 74rem;
  input {
    flex: 1;
    font-size: 20px;
    padding-left: 19px;
    padding-top: 10px;
    padding-bottom: 10px;
    background: #fff;
    width: 90%;
    border: 2px solid #8d3daf;
  }
  input:focus {
    outline: none;
  }
`;
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

const ShowMore =styled.div`
  margin-top:40px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`