import { Carousel } from "react-bootstrap";
import "./CardImgSlide.style.css"
import React from 'react'

const CardImgSlide = ({cardList}) => {
  return (
    <Carousel interval={2000} slide={false} controls={false}>
      {cardList?.map((el, index) => (
        <Carousel.Item  key={index}>
            <img style={{height:'10rem'}} className='mainpage-card-slide-img' src={el.image} alt="slide img"/>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default CardImgSlide