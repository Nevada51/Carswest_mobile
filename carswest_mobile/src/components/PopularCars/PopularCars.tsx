var React = require('react');
// var Carousel = require('react-responsive-carousel').Carousel;
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from './Carousel';
import './PopularCars.scss';

// import { images } from './imgArr';
// import { graphql } from "gatsby";

// import SedanIcon from '../../assets/images/sedan_icon.inline.svg'



const PopularCars: React.FC = (): JSX.Element => {
  return (
    <div className="popular-cars">
      <h2 className="section-title"><span>Популярные </span> авто из сша</h2>
        <div className="carousel-wrapper">
          <Carousel />
        </div>
    </div>
  )
}

export default PopularCars

