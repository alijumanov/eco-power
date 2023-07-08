import React from 'react';
import "swiper/css";
import { Autoplay } from "swiper";
import '../styles/TopProducts.scss';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { fetchTopCarsData } from '../api/api';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from "swiper/react";
import { PlayIcon, RightIcon } from '../assets/svgicons';
import { getDescription, getName } from '../languages/language';

const TopProducts = ({ changeProdValue }) => {

    // data of top-cars

    const { data } = useQuery('top-cars', fetchTopCarsData);

    const { t } = useTranslation();

    return (
        <div className='TopProducts parent'>
            <div className="wrapper gap-2">
                <div className="top">
                    <h1 className="sub-title">{t("top_prod")}</h1>
                    <Link to="/all-products" className="big-text explore">
                        {t("all_model")}
                        <div className="icon"><PlayIcon /></div>
                    </Link>
                </div>
                {data?.data?.filter((c) => c.top == true)?.slice(0, 1).map((item) => (
                    <Link to={`/products/${item.id}`} key={item.id} className="big-product pd-2">
                        <img src={item.image1} alt="back-img" className="back-img" />
                        <div className="texts gap-1">
                            <div className="head">
                                <h1 className="name">{getName(item)}</h1>
                                <div className="name round-07 best">{t("best")}</div>
                            </div>
                            <p className="big-text">{getDescription(item)}</p>
                        </div>
                        <div className="links">
                            <div className="explore"><RightIcon /></div>
                        </div>
                    </Link>
                ))}
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
                    {data?.data?.filter((c) => c.top == true)?.slice(1).map((item) => (
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
                    {data?.data?.filter((c) => c.top == true)?.slice(1).map((item) => (
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
                    {data?.data?.filter((c) => c.top == true)?.slice(1).map((item) => (
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

export default TopProducts;