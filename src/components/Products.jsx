import React, { useState } from 'react';
import '../styles/Products.scss';
import { useQuery } from 'react-query';
import TopProducts from './TopProducts';
import { fetchCarsData } from '../api/api';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getDescription, getName } from '../languages/language';
import { addProductsSaved } from '../redux/actions/planActions';
import { BatteryIcon, CabelIcon, DistanceIcon, HeartIcon, HeartOIcon, HourGlassIcon, MaxSpeedIcon, MotorIcon, PeopleIcon, RulerIcon, SpeedIcon, WeightIcon, WheelIcon } from '../assets/svgicons';

const Products = ({ changeProdValue }) => {

    const { id } = useParams();

    // image options

    const [mainImg, setMainImg] = useState("");

    // data of cars

    const { data } = useQuery('cars', fetchCarsData);

    const { t } = useTranslation();

    // redux options

    const dispatch = useDispatch();
    let savedProducts = useSelector((state) => state.savedProducts.products);

    function saveProduct(item) {
        dispatch(addProductsSaved(savedProducts?.includes(item) ? [...savedProducts?.filter((c) => c != item)] : [...savedProducts?.filter((c) => c != item), item]));
    };

    return (
        <>
            <div className='Products parent'>
                {data?.data?.filter((c) => c.id == id).map((item) => (
                    <div key={item.id} className="wrapper">
                        <div className="imgs">
                            <button className="heart-icon" onClick={() => saveProduct(item.id)}>
                                {savedProducts?.includes(item.id) ?
                                    <HeartIcon />
                                    :
                                    <HeartOIcon />
                                }
                            </button>
                            <img src={mainImg ? mainImg : item.image1} alt="image" className="main-img" />
                            <div className="additional-imgs">
                                {item.image1 &&
                                    <img src={item.image1 ? item.image1 : ""} alt="image" className="img" onClick={() => setMainImg(item.image1)} />
                                }
                                {item.image2 &&
                                    <img src={item.image2 ? item.image2 : ""} alt="image" className="img" onClick={() => setMainImg(item.image2)} />
                                }
                                {item.image3 &&
                                    <img src={item.image3 ? item.image3 : ""} alt="image" className="img" onClick={() => setMainImg(item.image3)} />
                                }
                            </div>
                        </div>
                        <div className="infos">
                            <h1 className="sub-title">{getName(item)}</h1>
                            <div className="name mtop-1" style={{ fontWeight: "600" }}>{t("price")}: <h3 className="name">{item.price} $</h3></div>
                            <div className="desc pd-1 gap-1 mtop-1">
                                <div className="icon"><MotorIcon /></div>
                                <p className="big-text">{getDescription(item).split('\r\n').slice(0, 1)}</p>
                            </div>
                            <div className="desc pd-1 gap-1">
                                <div className="icon"><BatteryIcon /></div>
                                <p className="big-text">{getDescription(item).split('\r\n').slice(1, 2)}</p>
                            </div>
                            <div className="desc pd-1 gap-1">
                                <div className="icon"><DistanceIcon /></div>
                                <p className="big-text">{getDescription(item).split('\r\n').slice(2, 3)}</p>
                            </div>
                            <div className="desc pd-1 gap-1">
                                <div className="icon"><WheelIcon /></div>
                                <p className="big-text">{getDescription(item).split('\r\n').slice(3, 4)}</p>
                            </div>
                            <div className="desc pd-1 gap-1">
                                <div className="icon"><SpeedIcon /></div>
                                <p className="big-text">{getDescription(item).split('\r\n').slice(4, 5)}</p>
                            </div>
                            <div className="desc pd-1 gap-1">
                                <div className="icon"><MaxSpeedIcon /></div>
                                <p className="big-text">{getDescription(item).split('\r\n').slice(5, 6)}</p>
                            </div>
                            <div className="desc pd-1 gap-1">
                                <div className="icon"><HourGlassIcon /></div>
                                <p className="big-text">{getDescription(item).split('\r\n').slice(6, 7)}</p>
                            </div>
                            <div className="desc pd-1 gap-1">
                                <div className="icon"><CabelIcon /></div>
                                <p className="big-text">{getDescription(item).split('\r\n').slice(7, 8)}</p>
                            </div>
                            <div className="desc pd-1 gap-1">
                                <div className="icon"><RulerIcon /></div>
                                <p className="big-text">{getDescription(item).split('\r\n').slice(8, 9)}</p>
                            </div>
                            <div className="desc pd-1 gap-1">
                                <div className="icon"><PeopleIcon /></div>
                                <p className="big-text">{getDescription(item).split('\r\n').slice(9, 10)}</p>
                            </div>
                            <div className="desc pd-1 gap-1">
                                <div className="icon"><WeightIcon /></div>
                                <p className="big-text">{getDescription(item).split('\r\n').slice(10, 11)}</p>
                            </div>
                            <button className="name explore round-07 scale-05 mtop-1" onClick={() => changeProdValue(item.name_uz)}>{t("buy")}</button>
                        </div>
                    </div>
                ))}
            </div>
            <TopProducts changeProdValue={changeProdValue} />
        </>
    );
};

export default Products;