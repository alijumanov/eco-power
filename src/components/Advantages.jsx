import React from 'react';
import '../styles/Advantages.scss';
import Img from '../assets/images/adv.png';
import { useTranslation } from 'react-i18next';

const Advantages = () => {

    const { t } = useTranslation();

    return (
        <div className='Advantages parent'>
            <div className="wrapper">
                <h1 className="sub-title mbot-1-5">{t("why_us")}</h1>
                <div className="imgs">
                    <img src={Img} alt="img" className='img' />
                </div>
                <div className="infos">
                    <div className="info gap-2">
                        <div className="number">1</div>
                        <div className="texts gap-2 pd-2">
                            <h1 className="name">{t("why_us_name1")}</h1>
                            <p className="min-text">{t("why_us_desc1")}</p>
                        </div>
                    </div>
                    <div className="info gap-2">
                        <div className="number">2</div>
                        <div className="texts gap-2 pd-2">
                            <h1 className="name">{t("why_us_name2")}</h1>
                            <p className="min-text">{t("why_us_desc2")}</p>
                        </div>
                    </div>
                    <div className="info gap-2">
                        <div className="number">3</div>
                        <div className="texts gap-2 pd-2">
                            <h1 className="name">{t("why_us_name3")}</h1>
                            <p className="min-text">{t("why_us_desc3")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;