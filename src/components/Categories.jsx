import React from 'react';
import UsedCars from './UsedCars';
import '../styles/Categories.scss';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import { getName } from '../languages/language';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchCarsData, fetchCategoriesData } from '../api/api';

const Categories = ({ changeProdValue }) => {

    const { id } = useParams();
    const { pathname } = useLocation();

    // data of categories

    const { data } = useQuery('categories', fetchCategoriesData);

    // data of cars

    const dataCars = useQuery('cars', fetchCarsData);

    const { t } = useTranslation();

    return (
        <>
            <div className='Categories parent'>
                <div className="wrapper">
                    <div className="left gap-1">
                        <Link to="/all-products" className={`big-text explore ${pathname == "/all-products" && "active"}`}>{t("all_model")}</Link>
                        {data?.data?.map((item) => (
                            <Link key={item.id} to={`/categories/${item.id}`} className={`big-text explore ${item.id == id && "active"}`}>{getName(item)}</Link>
                        ))}
                    </div>
                    <div className="right gap-2">
                        {dataCars?.data?.data?.filter((c) => id ? c.brand == id : c).map((item) => (
                            <div key={item.id} className="product gap-1">
                                <Link to={`/products/${item.id}`}>
                                    <img src={item.image1} alt="img" className='img' />
                                </Link>
                                <Link to={`/products/${item.id}`} className="texts">
                                    <p className="big-text">{getName(item)}</p>
                                    <p className="min-text">{item.price} $</p>
                                </Link>
                                <button className="explore min-text pd-05" onClick={() => changeProdValue(item.name_uz)}>{t("buy")}</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <UsedCars changeProdValue={changeProdValue} />
        </>
    );
};

export default Categories;