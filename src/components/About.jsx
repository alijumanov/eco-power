import CEO from './CEO';
import React from 'react';
import '../styles/About.scss';
import Contacts from './Contacts';
import Img from '../assets/images/about.png';
import Logo from '../assets/images/logo.png';
import { useTranslation } from 'react-i18next';

const About = ({ changeModal }) => {

    const { t } = useTranslation();

    return (
        <>
            <div className='About parent'>
                <div className="wrapper gap-2">
                    <div className="texts gap-2">
                        <h1 className="sub-title">{t("about_comp")}</h1>
                        <p className="big-text">{t("about_us")}</p>
                    </div>
                    <div className="imgs">
                        <img src={Img} alt="img" className='img' />
                        <img src={Logo} alt="logo" className='logo' />
                    </div>
                </div>
            </div>
            <CEO />
            <Contacts changeModal={changeModal} />
        </>
    );
};

export default About;