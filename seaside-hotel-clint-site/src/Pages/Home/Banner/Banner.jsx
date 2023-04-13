import React, { useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


//import images
import carouselImage1 from '../../../Assets/Banner/home_1_slider.jpg';
import carouselImage2 from '../../../Assets/Banner/home_2_slider.jpg';
import carouselImage3 from '../../../Assets/Banner/home_3_slider.jpg';
import carouselBg from '../../../Assets/Banner/home_slider_bg.png';

const Banner = () => {

    const content =[
        {
            title: ' RELAX',
            description:
                'Give a Helping Hand to Those eho Need It',
            button: 'Read More',
            image: carouselImage1,
           
        },
        {
            title: ' COMPORT',
            description:
                'Give a Helping Hand to Those eho Need It',
            button: 'Read More',
            image: carouselImage2,
        },
        {
            title: ' HAPPY',
            description:
                'Give a Helping Hand to Those eho Need It',
            button: 'Read More',
            image: carouselImage3,
        },
    ]

    

   
    return (
            
         <section className='w-full h-[100vh]'>
                <Swiper
                 spaceBetween={30}
                centeredSlides={true}
                zoom={true}
                autoplay={{
                color: 'white',
                delay: 8000,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="h-full w-full wrapper mySwiper ">
                <div className="w-full h-full bg-[#000000a6] absolute top-0"></div>
                {
                    content.map((item, index)=>
                    <SwiperSlide className="h-full w-full slider overflow-hidden" key={index}>
                        <img src={item?.image} className='h-full w-full object-cover ' alt="" />

                        <div className=" absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
                            <div className="relative">
                            <h1 className='text-white lg:text-[60px] md:text-[60px] text-3xl 
                                            uppercase font-bold 
                                            text-center'
                                data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500"
                                style={{'letterSpacing': '60px'}}>

                               {item?.title}
                            </h1>

                            
                            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] -z-10 translate-y-[-50%]" 
                                 data-aos="zoom-in"
                                 data-aos-easing="linear"
                                data-aos-duration="3500">
                                <img src={carouselBg} alt="" />
                            </div>
                            </div>
                            


                            <button className=' px-8 py-3 rounded border-white border-2 text-lg inline-block mt-20
                                                hover:bg-white
                                                text-white hover:text-black uppercase
                                                transition-all duration-700'>{item?.button}</button>
                                
                            </div>
                    </SwiperSlide>
                    )
                }
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-pagination"></div>
    
                
                </Swiper>

        </section> 

    );
};

export default Banner;