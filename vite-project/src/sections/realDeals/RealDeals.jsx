import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../../assets/nature-1.jpg';
import image2 from '../../assets/nature-2.jpg';
import image3 from '../../assets/nature-3.jpg';
import image4 from '../../assets/nature-4.jpg';
import image5 from '../../assets/nature-5.jpg';

const data = [
    {
        image: image1,
        title: 'New York City, Berlin',
        statistics: '(71% off normally $1000+)',
        price: '$285',
    },
    {
        image: image2,
        title: 'Boston, Reykjavik',
        statistics: '(88% off normally $800+)',
        price: '$100',
    },
    {
        image: image3,
        title: 'New York City, Barcelona',
        statistics: '(65% off normally $800+)',
        price: '$282',
    },
    {
        image: image4,
        title: 'Chicago, Cancun',
        statistics: '(67% off normally $500+)',
        price: '$166',
    },
    {
        image: image5,
        title: 'San Francisco, Tokyo',
        statistics: '(50% off normally $1200+)',
        price: '$525',
    },
];

const RealDeals = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '40px',
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '30px',
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '20px',
                },
            },
        ],
    };

    return (
        <div className="h-[100vh] flex flex-col justify-center gap-8 bg-[#FFFEF0]" aria-label="Real Deals section">
            <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#004449] overflow-hidden">
                    <span className="bg-[#D7FFC2] px-2">Real Deals</span>{' '}
                    <span className="ml-2">Members booked</span>
                </h2>
            </div>

            <div className="w-11/12 md:w-3/4 lg:w-[100%] mx-auto">
                <Slider {...settings} className="p-4">
                    {data.map((item) => (
                        <div key={item.title} className="px-3">
                            <div className="relative bg-white rounded-lg overflow-hidden border border-[#e6e6e6] mx-3.5">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-56 md:h-80 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-[#004449]">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-1">{item.statistics}</p>
                                </div>

                                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-[#FDD6BA] text-[#004449] p-4 rounded-full text-[33px] ">
                                    {item.price}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default RealDeals;