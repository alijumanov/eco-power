import React from 'react';
import '../styles/CEO.scss';
import { Link } from 'react-router-dom';
import { PlayIcon } from '../assets/svgicons';
import Logo from '../assets/images/logo2.png';
import { useTranslation } from 'react-i18next';
import Img1 from '../assets/images/person1.png';
import Img2 from '../assets/images/person2.png';

const CEO = () => {

    const { t } = useTranslation();

    return (
        <div className='CEO parent'>
            <div className="imgs">
                <div className="left gap-1">
                    <div className="image">
                        <img src={Img1} alt="img" className="img" />
                    </div>
                    <p className="name">{t("ceo1")}</p>
                    <Link to="/" className='explore big-text'>
                        {t("haed2")}
                        <div className="icon"><PlayIcon /></div>
                    </Link>
                </div>
                <div className="right">
                    <img src={Img2} alt="img" className="img" />
                    <h1 className="sub-title">{t("ceo2")}</h1>
                    <p className="text mtop-1">{t("ceo_txt")}</p>
                </div>
            </div>
            <div className="texts gap-2 pd-3">
                <div className="head gap-3">
                    <img src={Logo} alt="logo" className="logo" />
                    <p className="name">{t("about_team")}</p>
                </div>
                <p className="text">{t("team_txt")}</p>
                <p className="text">{t("want_job")} <br /> <a href='tel:+998990880088' className='text explore'>{t("call_center")}</a></p>
                <div className="bars mtop-3">
                    <div className="bar big-text c1">{t("bar1")}</div>
                    <div className="bar big-text c2">{t("bar2")}</div>
                    <div className="bar big-text c3">{t("bar3")}</div>
                    <div className="bar big-text">{t("bar4")}</div>
                    <div className="bar big-text c4">{t("bar5")}</div>
                </div>
            </div>
        </div>
    );
};

export default CEO;