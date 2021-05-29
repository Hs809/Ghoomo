import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom'

const ImgSlider = ({culture}) => {

  

  
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <Carousel {...settings}>
      {culture &&  Object.values(culture).map((data,key) => {
                
                return (
                  <Wrap key = {key}>
                 
                  <Link to = {`/detail/` + data.id}>
                    <div className="slidercontainer">
                      <img src={data.img1} alt="" />
                      <p>{data.title}</p>
                    </div>
                  </Link>
                </Wrap>
                    
                );
               
       })}
    
      
      
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;
    overflow-y:hidden;
    overflow-x:hidden;
  & > button {
    opacity: 1;
    height: 100%;
    width: 5vw;
    z-index: 1;
    background: #B62152 0% 0% no-repeat padding-box;
    opacity: 0.5;
    width: 47px;
  height: 286px;

    &:hover{
      opacity:0.5;
      background: #B62152 0% 0% no-repeat padding-box;
    }
    &:active{
      opacity:0.5;
      background: #B62152 0% 0% no-repeat padding-box;
    }
    &:focus{
      opacity:0.5;
      background: #B62152 0% 0% no-repeat padding-box;
    }
    
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(0,0,0);
    }
  }

  li.slick-active button:before {
    color: black;

  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: 0px;
  }

  .slick-next {
    right: 0px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  .slidercontainer {
    overflow:hidden;
    width: 257px;
    height: 284px;
    border: none;
    border-radius: 8px 8px 0px 0px;
    opacity: 1;
    box-shadow: 0px 3px 6px #EDB818;
   
    img {
      width: 100%;
      height: 80%;
      
    }
    p{
      width: 42px;
      height: 20px;
      margin:auto;
      font: normal normal normal 18px/21px Arial;
      letter-spacing: 0px;
      color: #4C0C43;
      opacity: 1;
    }
  }
  

    



`;

export default ImgSlider;
