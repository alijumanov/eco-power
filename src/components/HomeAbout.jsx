import React from 'react';
import '../styles/HomeAbout.scss';
import { Link } from 'react-router-dom';
import Img from '../assets/images/about.png';
import Logo from '../assets/images/logo.png';
import { RightIcon } from '../assets/svgicons';
import { useTranslation } from 'react-i18next';

const HomeAbout = () => {

    const { t } = useTranslation();

    return (
        <div className='HomeAbout parent'>
            <div className="wrapper gap-2">
                <div className="imgs">
                    <img src={Img} alt="img" className='img' />
                    <img src={Logo} alt="logo" className='logo' />
                </div>
                <div className="infos">
                    <div className="texts gap-2">
                        <h1 className="sub-title">{t("about_comp")}</h1>
                        <p className="big-text">{t("about_txt")}</p>
                    </div>
                    <div className="links">
                        <Link to="/about" className="explore name gap-1">
                            {t("more")}
                            <div className="icon"><RightIcon /></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;