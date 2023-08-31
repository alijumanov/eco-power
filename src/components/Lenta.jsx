import React from 'react';
import "swiper/css";
import '../styles/Lenta.scss';
import 'swiper/css/pagination';
import Img1 from '../assets/images/adv.png';
import Img2 from '../assets/images/about.png';
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Lenta = () => {
    return (
        <div className='Lenta parent'>
            <div className="wrapper">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    centeredSlides={true}
                    pagination={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className="product gap-1">
                        <img src={Img1} alt="img" className="img" />
                    </SwiperSlide>
                    <SwiperSlide className="product gap-1">
                        <img src={Img2} alt="img" className="img" />
                    </SwiperSlide>
                    <SwiperSlide className="product gap-1">
                        <img src={Img1} alt="img" className="img" />
                    </SwiperSlide>
                    <SwiperSlide className="product gap-1">
                        <img src={Img2} alt="img" className="img" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Lenta;