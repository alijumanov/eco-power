import React, { useRef, useState } from 'react';
import '../styles/StagesCooperation.scss';
import CarImg from '../assets/images/car.webp';
import { useTranslation } from 'react-i18next';

const StagesCooperation = () => {

    const stageRef = useRef();
    const [scroll, setScroll] = useState(0)

    window.addEventListener("scroll", () => {
        setScroll(window.scrollY - stageRef.current?.offsetTop);
    });

    // i18next

    const { t } = useTranslation();

    return (
        <div ref={stageRef} className={`StagesCooperation parent ${scroll > 0 ? "full-page" : "parent"}`}>
            <div className="wrap parent">
                <div className="wrapper" style={{ transform: scroll > 0 ? `translateX(-${scroll}px)` : "translateX(0)" }}>
                    <h1 className="sub-title">{t("hamkorlar")}</h1>
                    <div className="line"></div>
                    <div className="card-1 round-07 card text pd-2">{t("card_1")}</div>
                    <div className="card-2 round-07 card text pd-2">{t("card_2")}</div>
                    <div className="card-3 round-07 card text pd-2">{t("card_3")}</div>
                    <div className="card-4 round-07 card text pd-2">{t("card_4")}</div>
                    <div className="card-5 round-07 card text pd-2">{t("card_5")}</div>
                </div>
                <div className="car">
                    <img src={CarImg} alt="img" className="img" />
                </div>
            </div>
        </div>
    );
};

export default StagesCooperation;