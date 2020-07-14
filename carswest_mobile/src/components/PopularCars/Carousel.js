import React from 'react';
import { useStaticQuery,  graphql } from 'gatsby';
import { Carousel } from 'react-responsive-carousel';

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

  const tooglesGroupId = 'Toggles';
  const valuesGroupId = 'Values';
  const mainGroupId = 'Main';
  
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
    // console.log({allFile:{edges}});
    // const { markdownRemark } = data
    // const { frontmatter, html } = markdownRemark

    return (
        <Carousel {...getConfigurableProps()}>
            {cars.map(({name, priceUkraine, priceUSU, image:{childImageSharp:{fluid:{src}}}})  =>
             <div key={name}>
                <p className="nmae">{name}</p>
                <img alt="" src={src} />
                <p className="price usa">{priceUSU}</p>
                <p className="price ukraine">{priceUkraine}</p>
             </div>)}
        </Carousel>
    );
}

// {edges.map(({node:{id,childImageSharp:{fluid:{src}},}}) => 