import React from 'react';
import '../styles/SavedProducts.scss';
import { useQuery } from 'react-query';
import { fetchCarsData } from '../api/api';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { HeartIcon, HeartOIcon } from '../assets/svgicons';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getDescription, getName } from '../languages/language';
import { addProductsSaved } from '../redux/actions/planActions';

const SavedProducts = ({ changeProdValue }) => {

    // data of cars

    const dataCars = useQuery('cars', fetchCarsData);

    const { t } = useTranslation();

    // redux options

    const dispatch = useDispatch();
    let savedProducts = useSelector((state) => state.savedProducts.products);

    function saveProduct(item) {
        dispatch(addProductsSaved(savedProducts?.includes(item) ? [...savedProducts?.filter((c) => c != item)] : [...savedProducts?.filter((c) => c != item), item]));
    };

    let lang = localStorage.getItem('i18nextLng')

    return (
        <div className='SavedProducts parent'>
            <div className="wrapper">
                {savedProducts.length > 0 ?
                    <div className="right gap-2">
                        {dataCars?.data?.data?.map((item) => (
                            savedProducts.includes(item.id) &&
                            <div key={item.id} className="product gap-1">
                                <button className="heart-icon" onClick={() => saveProduct(item.id)}>
                                    {savedProducts?.includes(item.id) ?
                                        <HeartIcon />
                                        :
                                        <HeartOIcon />
                                    }
                                </button>
                                <Link to={`/products/${item.id}`}>
                                    <img src={item.image1} alt="img" className='img' />
                                </Link>
                                <Link to={`/products/${item.id}`} className="texts">
                                    <p className="big-text">{getName(item)}</p>
                                    <p className="min-text">{t("price")}: {item.price} $</p>
                                    <p className="desc min-text">{getDescription(item).split('\r\n').slice(0, 1)}</p>
                                    <p className="desc min-text">{getDescription(item).split('\r\n').slice(1, 2)}</p>
                                </Link>
                                <button className="explore min-text pd-05" onClick={() => changeProdValue(item.name_uz)}>{t("buy")}</button>
                            </div>
                        ))}
                    </div>
                    :
                    <h1 className="title">{lang == 'uz' ? "Birorta ham avtomobilni saqlamagansiz" : lang == 'ru' ? "Вы не сохранили ни одной машины" : "You have not saved any cars"}</h1>
                }
            </div>
        </div>
    );
};

export default SavedProducts;