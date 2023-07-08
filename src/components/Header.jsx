import React from 'react';
import '../styles/Header.scss';
import { Link } from 'react-router-dom';
import { RightIcon } from '../assets/svgicons';
import { useTranslation } from 'react-i18next';
import BackImg from '../assets/images/header.png';

const Header = ({ changeProdValue }) => {

    const { t } = useTranslation();

    return (
        <div className='Header parent'>
            <img src={BackImg} alt="back-img" className="back-img" />
            <div className="wrapper">
                <div className="left gap-2">
                    <h1 className="big-title">{t("head1")}</h1>
                    <p className="name mbot-3">{t("head0")}</p>
                    <div className="btns gap-2 mtop-5">
                        <Link to="/" onClick={() => changeProdValue("Naqdga xarid qilmoqchi")} className="explore name round-07">{t("haed3")}</Link>
                        <Link to="/" className="explore name round-07" onClick={() => changeProdValue("Band qilmoqchi")}>{t("head4")}</Link>
                    </div>
                </div>
                <div className="right">
                    <Link to="/all-products" className="explore gap-2 name">
                        {t("haed2")}
                        <div className="icon">
                            <RightIcon />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;