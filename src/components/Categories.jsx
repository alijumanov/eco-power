import React from 'react';
import UsedCars from './UsedCars';
import '../styles/Categories.scss';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import { getDescription, getName } from '../languages/language';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchCarsData, fetchCategoriesData } from '../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { addProductsSaved } from '../redux/actions/planActions';
import { HeartIcon, HeartOIcon } from '../assets/svgicons';

const Categories = ({ changeProdValue }) => {

    const { id } = useParams();
    const { pathname } = useLocation();

    // data of categories

    const { data } = useQuery('categories', fetchCategoriesData);

    // data of cars

    const dataCars = useQuery('cars', fetchCarsData);

    const { t } = useTranslation();

    // redux options

    const dispatch = useDispatch();
    let savedProducts = useSelector((state) => state.savedProducts.products);

    function saveProduct(item) {
        dispatch(addProductsSaved(savedProducts?.includes(item) ? [...savedProducts?.filter((c) => c != item)] : [...savedProducts?.filter((c) => c != item), item]));
    };

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
                </div>
            </div>
            <UsedCars changeProdValue={changeProdValue} />
        </>
    );
};

export default Categories;