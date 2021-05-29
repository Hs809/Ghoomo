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
                    <button>{data.title}</button>
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
    }


    .arrow{
        width:50px;
    }

`
const Wrap = styled.div``