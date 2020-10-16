import React from 'react';
import './Slides.css'
import { CarouselProvider, Slider, Slide, } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'
import carousel4 from '../../../images/carousel-4.png'
import carousel5 from '../../../images/carousel-5.png'

export default class extends React.Component {
  render() {
    return (
        <div className=" slider py-5">
            <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="text-white my-5">Here are some of <span className="brand-text">our works</span></h3>
            <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={30}
        totalSlides={5}
        interval={3000}
        isPlaying={true}
      >
        <Slider>
          <Slide index={0}><img style={{height:'600px'}} src={carousel1} alt=""/></Slide>
          <Slide index={1}><img style={{height:'600px'}} src={carousel2} alt=""/></Slide>
          <Slide index={2}><img style={{height:'600px'}} src={carousel3} alt=""/></Slide>
          <Slide index={3}><img style={{height:'600px'}} src={carousel4} alt=""/></Slide>
          <Slide index={4}><img style={{height:'600px'}} src={carousel5} alt=""/></Slide>
        </Slider>
        
        
      </CarouselProvider>
        </div>
        </div>
        </div>
      
    );
  }
}