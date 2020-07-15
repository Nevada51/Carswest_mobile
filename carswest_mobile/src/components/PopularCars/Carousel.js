import React from 'react';
import { useStaticQuery,  graphql } from 'gatsby';
import { Carousel } from 'react-responsive-carousel';
import './Carousel.scss';

const PICTURE_QUERY = graphql`
query PictureQuery {
    markdownRemark {
      frontmatter {
        cars {
          name
          priceUSU
          priceUkraine
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
  `

  const getConfigurableProps = () => ({
    showArrows: boolean('showArrows', true, tooglesGroupId),
    showStatus: boolean('showStatus', false, tooglesGroupId),
    showIndicators: boolean('showIndicators', true, tooglesGroupId),
    infiniteLoop: boolean('infiniteLoop', true, tooglesGroupId),
    showThumbs: boolean('showThumbs', true, tooglesGroupId),
    useKeyboardArrows: boolean('useKeyboardArrows', true, tooglesGroupId),
    autoPlay: boolean('autoPlay', true, tooglesGroupId),
    stopOnHover: boolean('stopOnHover', true, tooglesGroupId),
    swipeable: boolean('swipeable', true, tooglesGroupId),
    dynamicHeight: boolean('dynamicHeight', true, tooglesGroupId),
    emulateTouch: boolean('emulateTouch', true, tooglesGroupId),
    thumbWidth: number('thumbWidth', 100, {}, valuesGroupId),
    selectedItem: number('selectedItem', 0, {}, valuesGroupId),
    interval: number('interval', 3000, {}, valuesGroupId),
    transitionTime: number('transitionTime', 150, {}, valuesGroupId),
    swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, valuesGroupId),
});




export default () => {
    const {markdownRemark:{frontmatter:{cars}}} = useStaticQuery(PICTURE_QUERY);

    console.log({markdownRemark:{frontmatter:{cars}}});

    const customRenderThumb = (children) =>
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


