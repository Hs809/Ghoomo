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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      {culture &&  Object.values(culture).map((data,key) => {
                
                return (
                  <Wrap key = {key}>
                 
                  <Link to = {`/detail/` + data.id}>
                    <img src={data.img1} alt="" />
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
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(103, 128, 159, 1);
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;
