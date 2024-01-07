import React from 'react';
import "swiper/css";
import '../styles/Lenta.scss';
import 'swiper/css/pagination';
import { useQuery } from 'react-query';
import { fetchCarsData } from '../api/api';
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getDescription } from '../languages/language';

const Lenta = () => {

    // API options

    const dataSlider = useQuery('slider', fetchCarsData);

    // i18next

    let lang = localStorage.getItem('i18nextLng');

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
                    {dataSlider?.data?.data?.slice(0, 5)?.map((item) => (
                        <SwiperSlide key={item?.id} className="product gap-1">
                            <img src={item?.image1} alt="img" className="img" />
                            <h1 className="sub-title mtop-1-5 mbot-1">{lang == 'uz' ? item?.name_uz : lang == 'en' ? item?.name_en : item?.name_ru}</h1>
                            <p className="big-text mtop-1">{item.price} $</p>
                            <p className="big-text mtop-1">{getDescription(item)}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Lenta;