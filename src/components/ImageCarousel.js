import React, { useState } from 'react';
import { CarouselData } from './CarouselData';
import {BiRightArrow, BiLeftArrow} from 'react-icons/bi';

const ImageCarousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1);
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className="slider">
            <BiLeftArrow className="leftArrow arrow" onClick={prevSlide} />
            <BiRightArrow className="rightArrow arrow" onClick={nextSlide} />
           {CarouselData.map((slide, index) => {
               return (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (<img src={slide.image} alt='random text' className='imag'/>)}
                </div>
               )   
           })} 
        </section>
    );
};

export default ImageCarousel;