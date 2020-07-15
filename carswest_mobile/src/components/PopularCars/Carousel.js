import React from 'react';
import { useStaticQuery,  graphql } from 'gatsby';
import { Carousel } from 'react-responsive-carousel';
import './Carousel.scss';

const PICTURE_QUERY = graphql`
query PictureQuery {
  markdownRemark(fileAbsolutePath: {regex: "/cars-info/"}) {
    frontmatter {
      cars {
        name
        priceUSU
        priceUkraine
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
    const {markdownRemark:{frontmatter:{cars}}} = useStaticQuery(PICTURE_QUERY);

    const customRenderThumb = () =>
    cars.map(({name, priceUkraine, priceUSU, image:{childImageSharp:{fluid:{src}}}})  =>

       <div className="thumbnails-slide" key={name}>
        <p className="name">{name}</p>
        <div className="thumbnail-wrapp">
          <img className = "thumbnail-img" alt="{name}" src={src} />
        </div>
        <p className="price usa">{priceUSU}</p>
        <p className="price ukraine">{priceUkraine}</p>
      </div>

    );

    return (
        <Carousel autoPlay={false} showStatus={false} showIndicators={false} infiniteLoop={true} renderThumbs={customRenderThumb} thumbWidth={170}>
            {cars.map(({name, priceUkraine, priceUSU, image:{childImageSharp:{fluid:{src}}}})  =>
             <div key={name}>
                <div className="background-circle"></div>
                <p className="name">{name}</p>
                <div className="main-img-wrapp">
                  <img className = "main-img" alt="{name}" src={src} />
                </div>
                <p className="price usa">{priceUSU}</p>
                <p className="price ukraine">{priceUkraine}</p>
             </div>)}
        </Carousel>
    );
}


