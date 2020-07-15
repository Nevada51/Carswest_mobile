import React from 'react';
import { useStaticQuery,  graphql } from 'gatsby';
import { Carousel } from 'react-responsive-carousel';
import './Carousel.scss';

const CARS_QUERY = graphql`
query CarsQuery {
  markdownRemark(fileAbsolutePath: {regex: "/about-company-slider/"}) {
    frontmatter {
      cars {
        mark
        model
        modelClass
        image
        {
          childImageSharp
          {
            fluid
            {
              src
            }
          }
        }
      }
    }
  }
}
`

export default () => {
    const {markdownRemark:{frontmatter:{cars}}} = useStaticQuery(CARS_QUERY);

    return (
        <Carousel autoPlay={false} showArrows={false} showStatus={false} showIndicators={true} infiniteLoop={true} showThumbs={false} enterClass="animated fadeIn faster" exitClass="animated fadeOut faster">
            {cars.map(({mark, model, modelClass, image:{childImageSharp:{fluid:{src}}}})  =>
             <div key={model}>
                <div className="slide-info">
                  <p className="mark">{mark}</p>
                  <p className="model">{model}</p>
                  <p className="class-model">{modelClass}</p>
                </div>
                <div className="main-img-wrapp">
                  <img className = "main-img" alt="{name}" src={src} />
                </div>

             </div>)}
        </Carousel>
    );
}


