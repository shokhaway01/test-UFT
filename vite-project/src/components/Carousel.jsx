import React from 'react'
import Slider from "react-slick";
import IMAGE1 from "../assets/IMAGE1.png"
import IMAGE2 from "../assets/IMAGE2.png"
import IMAGE3 from "../assets/IMAGE3.png"
import IMAGE4 from "../assets/IMAGE4.png"
import IMAGE5 from "../assets/IMAGE5.png"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const images = [IMAGE1,IMAGE2,IMAGE3,IMAGE4,IMAGE5,IMAGE1,IMAGE2,IMAGE3,IMAGE4,IMAGE5]

var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
};

const Carousel = () => {
    return (
        <div className='carousels flex flex-col  items-center justify-center gap-8'>
            <h2 className='   text-[#FFFEF0]'>AS SEEN IN</h2>
            <br />
            <Slider {...settings} className='overflow-hidden flex direction-row items-center justify-center w-full h-full'>
                {images.map((img, idx) => (
                    <div key={idx} className="carousel-container p-3.5 gap-2.5 flex items-center justify-center" align="center">
                        <img src={img} alt={`carousel-${idx}`} width={50} className="carousel-image object-contain max-w-full max-h-full" />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel
