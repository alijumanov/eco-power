import React, { useState } from 'react';
import '../styles/Products.scss';
import { useQuery } from 'react-query';
import TopProducts from './TopProducts';
import { fetchCarsData } from '../api/api';
import { useParams } from 'react-router-dom';
import { getDescription, getName } from '../languages/language';
import { useTranslation } from 'react-i18next';

const Products = ({ changeProdValue }) => {

    const { id } = useParams();

    // image options

    const [mainImg, setMainImg] = useState("");

    // data of cars

    const { data } = useQuery('cars', fetchCarsData);

    const { t } = useTranslation();

    return (
        <>
            <div className='Products parent'>
                {data?.data?.filter((c) => c.id == id).map((item) => (
                    <div key={item.id} className="wrapper">
                        <div className="imgs">
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
                        <div className="infos gap-2">
                            <h1 className="sub-title">{getName(item)}</h1>
                            <div className="name" style={{ fontWeight: "600" }}>{t("price")}: <h3 className="name">{item.price} $</h3></div>
                            <p className="big-text">{getDescription(item)}</p>
                            <button className="name explore round-07 scale-05" onClick={() => changeProdValue(item.name_uz)}>{t("buy")}</button>
                        </div>
                    </div>
                ))}
            </div>
            <TopProducts changeProdValue={changeProdValue} />
        </>
    );
};

export default Products;