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
        <div ref={stageRef} className='StagesCooperation parent'>
            <div className="wrapper">
                <h1 className="sub-title">{t("hamkorlar")}</h1>
                <div className="line"></div>
                <div className="card-1 card text pd-2">Вы подбираете электромобиль, мы даём подтверждение о его наличии на нашем складе в Китае</div>
                <div className="card-2 card text pd-2">Вы подбираете электромобиль, мы даём подтверждение о его наличии на нашем складе в Китае</div>
                <div className="card-3 card text pd-2">Вы подбираете электромобиль, мы даём подтверждение о его наличии на нашем складе в Китае</div>
                <div className="card-4 card text pd-2">Вы подбираете электромобиль, мы даём подтверждение о его наличии на нашем складе в Китае</div>
                <div className="card-5 card text pd-2">Вы подбираете электромобиль, мы даём подтверждение о его наличии на нашем складе в Китае</div>
            </div>
            <div className="car" style={{ transform: scroll > 0 ? `translateY(${scroll + 200}px)` : "translateY(0)" }}>
                <img src={CarImg} alt="img" className="img" />
            </div>
        </div>
    );
};

export default StagesCooperation;