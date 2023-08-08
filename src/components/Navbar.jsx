import React, { useEffect, useState } from 'react';
import '../styles/Navbar.scss';
import Logo from '../assets/images/logo.png';
import { useTranslation } from 'react-i18next';
import { changeLang } from '../languages/language';
import { Link, useLocation } from 'react-router-dom';
import { CloseIcon, InstagramIcon, LightHeartIcon, MenuIcon, TelegramIcon } from '../assets/svgicons';
import { useSelector } from 'react-redux';

const Navbar = ({ changeScrollFaq, changeScrollAbout, changeScrollTopCars, changeScrollCategories, changeScrollVideoReviews }) => {

    const { pathname } = useLocation();

    // scroll effects

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10 ? true : false)
        })
    }, []);

    // languages

    const { i18n, t } = useTranslation();
    const [language, setLanguage] = useState(false);
    let langTitle = localStorage.getItem('i18nextLng');

    function changeLangValue(item) {
        changeLang(item);
        setLanguage(false);
        i18n.changeLanguage(item);
    };

    // navbar menu or navbar-nav

    const [showMenu, setShowMenu] = useState(false);

    // redux options

    let savedProducts = useSelector((state) => state.savedProducts.products);

    return (
        <div className={`Navbar ${pathname == "/" ? scroll && "dark-navbar" : "dark-navbar"}`}>
            <div className="navbar wrapper">
                <div className="left gap-2">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)} className="logo">
                        <img src={Logo} alt="log" />
                    </Link>
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
                <div className="right gap-2">
                    <div className={`nav-links gap-2 ${showMenu && "show-menu"}`}>
                        <Link to="/" className='text' onClick={changeScrollTopCars}>{t("nav1")}</Link>
                        <Link to="/" className='text' onClick={changeScrollAbout}>{t("nav2")}</Link>
                        <Link to="/" className='text' onClick={changeScrollCategories}>{t("nav3")}</Link>
                        <Link to="/" className='text' onClick={changeScrollVideoReviews}>{t("nav4")}</Link>
                        <Link to="/" className='text' onClick={changeScrollFaq}>{t("nav5")}</Link>
                        <Link to="/saved" className='text'>
                            <div className="icon"><LightHeartIcon />  <span className='min-text'>{savedProducts?.length}</span></div>
                        </Link>
                        <a href="tel:+998935559551" className="tel-btn round-07 text ver-2">+99893 555 95 51</a>
                        <div className="close-icon ver-2" onClick={() => setShowMenu(false)}><CloseIcon /></div>
                    </div>
                    <div className="language">
                        <div className="lang-title text round-07" onClick={() => setLanguage(!language)}>{langTitle == "uz" ? "Uzbek" : langTitle == "ru" ? "Russian" : "English"}</div>
                        {language &&
                            <div className="lang-menu round-07">
                                <div className="lang text" onClick={() => changeLangValue("uz")}>Uzbek</div>
                                <div className="lang text" onClick={() => changeLangValue("ru")}>Russian</div>
                                <div className="lang text" onClick={() => changeLangValue("en")}>English</div>
                            </div>
                        }
                        {language &&
                            <div className="contrast-0" onClick={() => setLanguage(!language)}></div>
                        }
                    </div>
                    <a href="tel:+998935559551" className="tel-btn round-07 text ver-1">+99893 555 95 51</a>
                    <div className="menu-icon round-07 ver-2" onClick={() => setShowMenu(true)}><MenuIcon /></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;