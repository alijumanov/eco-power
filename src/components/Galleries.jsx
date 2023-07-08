import React, { useState } from 'react';
import "swiper/css";
import "swiper/css/navigation";
import '../styles/Galleries.scss';
import { Navigation } from "swiper";
import { useQuery } from 'react-query';
import { CloseIcon } from '../assets/svgicons';
import { fetchGalleriesData } from '../api/api';
import { Swiper, SwiperSlide } from "swiper/react";
import { getDescription } from '../languages/language';
import { useTranslation } from 'react-i18next';

const Galleries = () => {

    const [pointImg, setPointImg] = useState("");

    // data of galleries

    const { data } = useQuery('galleries', fetchGalleriesData);

    const { t } = useTranslation();

    return (
        <>
            <div className='Galleries parent'>
                <div className="wrapper">
                    <h1 className="sub-title">{t("gallary")}</h1>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={10}
                        loop={true}
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                        breakpoints={{
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            }
                        }}
                    >
                        {data?.data?.map((item) => (
                            <SwiperSlide key={item.id} className="gallery gap-1" onClick={() => setPointImg(item.image)}>
                                <img src={item.image} alt="img" className='img' />
                                <p className="text">{getDescription(item)}</p>
                            </SwiperSlide>
                        ))}
                        {data?.data?.map((item) => (
                            <SwiperSlide key={item.id} className="gallery gap-1" onClick={() => setPointImg(item.image)}>
                                <img src={item.image} alt="img" className='img' />
                                <p className="text">{getDescription(item)}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            {pointImg != "" &&
                <div className="modal-image">
                    <img src={pointImg ? pointImg : ""} alt="image" className="img" />
                    <div className="contrast" onClick={() => setPointImg("")}></div>
                    <div className="close-icon" onClick={() => setPointImg("")}>
                        <CloseIcon />
                    </div>
                </div>
            }
        </>
    );
};

export default Galleries;