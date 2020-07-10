import React from 'react'
import './PopularCars.scss'
// import SedanIcon from '../../assets/images/sedan_icon.inline.svg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PopularCars: React.FC = (): JSX.Element => {
  return (
    <div className="popular-cars">
      <h2 className="section-title"><span>Популярные </span> авто из сша</h2>
      <div className="slide-wrapper">

      <Carousel>
        <div>
            <img src="/../../assets/images/slide1.jpeg" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src="/../../assets/images/slide1.jpeg" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src="/../../assets/images/slide1.jpeg" />
            <p className="legend">Legend 3</p>
        </div>
      </Carousel>

      </div>
    </div>
  )
}

export default PopularCars
