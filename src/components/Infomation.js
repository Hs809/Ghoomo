import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from './Button';

function Infomation({culture}) {
    return (
        <Container>
        <div className="container">
            <Link to = "/information">
            <img src="/assets/svg/auto_stories_purple_24dp.svg" alt="" />
            </Link>
            <p>Learn about different places</p>
            <img className= "arrow" src="/assets/svg/bottom-design.svg" alt="" />
        </div>

        {culture &&  Object.values(culture).map((data,key) => {
                
                return (
                  <Wrap key = {key}>
                 
                  <Link to = {`/detail/` + data.id}>
                    <button><p>{data.title}</p></button>
                  </Link>
                </Wrap>
                    
                );
               
       })}
        </Container>
    )
}

export default Infomation


const Container = styled.div`
    .container{
        display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-bottom:50px;
    }


    .arrow{
        width:50px;
    }

`
const Wrap = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    p{
        text-align: center;
        font: normal normal normal 18px/21px Arial;
        letter-spacing: 0px;
        color: #4E4E4E;
        opacity: 1;
    }
    button:nth-child(odd){
        width: 350px;
    height: 61px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #B62152;
    border-radius: 8px;
    opacity: 1;
    margin:19px;
    }
    button:nth-child(even)){
        width: 350px;
        height: 61px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #B62152;
        border-radius: 8px;
        opacity: 1;
    }

`