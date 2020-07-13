var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;
import './PopularCars.scss'
import './imgArr.ts'
import { images } from './imgArr';
import { graphql } from "gatsby"

// import SedanIcon from '../../assets/images/sedan_icon.inline.svg'



const PopularCars: React.FC = (): JSX.Element => {
  return (
    <div className="popular-cars">
      <h2 className="section-title"><span>Популярные </span> авто из сша</h2>
      <div className="slide-wrapper">


      {/* <Carousel showArrows={true} >

          {images.map(({imgUrl},idx)=>
          <div key={idx} style={{backgroundImage: `url(${imgUrl})`}}>

            <p className="legend">Legend {idx}</p>
          </div>)}

      </Carousel> */}

      </div>
    </div>
  )
}

export default PopularCars

