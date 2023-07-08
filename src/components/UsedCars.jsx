import React from 'react';
import "swiper/css";
import '../styles/UsedCars.scss';
import { Autoplay } from "swiper";
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { fetchCarsData } from '../api/api';
import { PlayIcon } from '../assets/svgicons';
import { useTranslation } from 'react-i18next';
import { getName } from '../languages/language';
import { Swiper, SwiperSlide } from "swiper/react";

const UsedCars = ({ changeProdValue }) => {

    // data of cars

    const { data } = useQuery('cars', fetchCarsData);

    const { t } = useTranslation();

    return (
        data?.data?.filter((c) => c.used == "used").length != 0 &&
        <div className='UsedCars parent'>
            <div className="wrapper gap-2">
                <div className="top">
                    <h1 className="sub-title">{t("used_car")}</h1>
                    <Link to="/all-products" className="big-text explore">
                        {t("all_model")}
                        <div className="icon"><PlayIcon /></div>
                    </Link>
                </div>
                <Swiper
                    slidesPerView={1.8}
                    spaceBetween={10}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 35,
                        }
                    }}
                >
                    {data?.data?.filter((c) => c.used == "used")?.map((item) => (
                        <SwiperSlide key={item.id} className="product gap-1">
                            <Link to={`/products/${item.id}`}>
                                <img src={item.image1} alt="img" className='img' />
                            </Link>
                            <Link to={`/products/${item.id}`} className="texts">
                                <p className="big-text">{getName(item)} <span>nimadir nimadir</span></p>
                                <p className="min-text">{item.price} $</p>
                            </Link>
                            <button className="explore min-text pd-05" onClick={() => changeProdValue(item.name_uz)}>{t("buy")}</button>
                        </SwiperSlide>
                    ))}
                    {data?.data?.filter((c) => c.used == "used")?.map((item) => (
                        <SwiperSlide key={item.id} className="product gap-1">
                            <Link to={`/products/${item.id}`}>
                                <img src={item.image1} alt="img" className='img' />
                            </Link>
                            <Link to={`/products/${item.id}`} className="texts">
                                <p className="big-text">{getName(item)} <span>nimadir nimadir</span></p>
                                <p className="min-text">{item.price} $</p>
                            </Link>
                            <button className="explore min-text pd-05" onClick={() => changeProdValue(item.name_uz)}>{t("buy")}</button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default UsedCars;