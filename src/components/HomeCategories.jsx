import React from 'react';
import '../styles/HomeCategories.scss';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { PlayIcon } from '../assets/svgicons';
import { useTranslation } from 'react-i18next';
import { getName } from '../languages/language';
import { fetchCategoriesData } from '../api/api';

const HomeCategories = () => {

    // data of categories

    const { data } = useQuery('categories', fetchCategoriesData);

    const { t } = useTranslation();

    return (
        <div className='HomeCategories parent'>
            <div className="wrapper gap-2">
                <h1 className="sub-title mtop-2">{t("brand")}</h1>
                <div className="categories gap-3">
                    {data?.data?.map((item) => (
                        <Link to={`/categories/${item.id}`} key={item.id} className="category">
                            <img src={item.image} alt="img" className="img" />
                            <div className="top-texts mtop-1-5">
                                <p className="text">{getName(item)}</p>
                                <div className="text explore">
                                    {t("all_brands")}
                                    <div className="icon"><PlayIcon /></div>
                                </div>
                            </div>
                            {/* <p className="min-text">{item.price}$</p> */}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeCategories;