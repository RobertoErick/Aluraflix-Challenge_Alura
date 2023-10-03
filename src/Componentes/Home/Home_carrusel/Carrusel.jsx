import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../img/FrontEnd1.png";
import img2 from "../../../img/FrontEnd2.png";
import img3 from "../../../img/FrontEnd3.png";

const VideoCard = styled.div`
  margin: 20px 0 20px 0; 
`

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div>
        <Slider {...settings}>
          <VideoCard>
            <img src={img1} alt="Portada uno" />
          </VideoCard>
          <VideoCard>
            <img src={img2} alt="Portada dos" />
          </VideoCard>
          <VideoCard>
            <img src={img3} alt="Portada tres" />
          </VideoCard>
          <VideoCard>
            <img src={img1} alt="Portada cuatro" />
          </VideoCard>
          <VideoCard>
            <img src={img2} alt="Portada cuatro" />
          </VideoCard>
          <VideoCard>
            <img src={img3} alt="Portada cuatro" />
          </VideoCard>
          <VideoCard>
            <img src={img1} alt="Portada cuatro" />
          </VideoCard>
        </Slider>
      </div>
    );
  }
}
