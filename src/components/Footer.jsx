import React from 'react';
import '../styles/Footer.scss';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/logo1.png';
import { useTranslation } from 'react-i18next';
import { InstagramIcon, LocationIcon, SearchIcon, TelegramIcon } from '../assets/svgicons';

const Footer = ({ changeScrollFaq, changeScrollAdvantage, changeScrollUsedCars, changeScrollCalculate, changeScrollAbout, changeScrollTopCars, changeScrollCategories, changeScrollVideoReviews }) => {

    const { pathname } = useLocation();

    // i18next

    const { t } = useTranslation();

    return (
        <div className={`Footer parent ${pathname == "/all-products" && "none-footer"} ${pathname.slice(0, 11) == "/categories" && "none-footer"}`}>
            <div className="wrapper">
                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="logo">
                    <img src={Logo} alt="log" />
                </Link>
                <div className="socials gap-2 sc ver-2">
                    <a href="https://www.instagram.com/ecopoweruz/" target={'_blank'} className="social text gap-1">
                        <div className="icon">
                            <InstagramIcon />
                        </div>
                        {t("instagram")}
                    </a>
                    <a href='https://t.me/ecopoweruz' target={'_blank'} className="social text gap-1">
                        <div className="icon">
                            <TelegramIcon />
                        </div>
                        {t("telegram")}
                    </a>
                </div>
                <div className="right">
                    <div className="tools gap-1">
                        <div className="big-text tool">{t("foot1")}</div>
                        <Link to="/" className='big-text' onClick={changeScrollAbout}>{t("foot2")}</Link>
                        <Link to="/" className='big-text' onClick={changeScrollCategories}>{t("foot3")}</Link>
                        <Link to="/" className='big-text' onClick={changeScrollAdvantage}>{t("foot4")}</Link>
                        <Link to="/" className='big-text' onClick={changeScrollFaq}>{t("nav5")}</Link>
                    </div>
                    <div className="tools gap-1">
                        <div className="big-text tool">{t("foot6")}</div>
                        <Link to="/" className='big-text' onClick={changeScrollTopCars}>{t("foot7")}</Link>
                        <Link to="/" className='big-text' onClick={changeScrollUsedCars}>{t("foot8")}</Link>
                        <Link to="/" className='big-text' onClick={changeScrollCalculate}>{t("foot9")}</Link>
                        <Link to="/" className='big-text' onClick={changeScrollVideoReviews}>{t("foot10")}</Link>
                    </div>
                    <div className="locations gap-1">
                        <div className="searching">
                            <input type="text" id='search' className='big-text pd-1' placeholder={`${t("search")}`} />
                            <label htmlFor="search" className='icon'>
                                <SearchIcon />
                            </label>
                        </div>
                        <div className="location big-text gap-2 pd-1-5">
                            <div className="icon"><LocationIcon /></div>
                            {t("foot11")}
                        </div>
                        <div className="socials gap-2 mtop-1 ver-1">
                            <a href="https://www.instagram.com/ecopoweruz/" target={'_blank'} className="social text gap-1">
                                <div className="icon">
                                    <InstagramIcon />
                                </div>
                                {t("instagram")}
                            </a>
                            <a href='https://t.me/ecopoweruz' target={'_blank'} className="social text gap-1">
                                <div className="icon">
                                    <TelegramIcon />
                                </div>
                                {t("telegram")}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;