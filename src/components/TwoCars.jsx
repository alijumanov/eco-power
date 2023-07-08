import React, { useState } from 'react';
import '../styles/TwoCars.scss';
import Img1 from '../assets/images/car1.png';
import Img2 from '../assets/images/car2.png';
import { useTranslation } from 'react-i18next';

const TwoCars = () => {

    const [rangeValue, setRangeValue] = useState(500);

    function changeRange(value) {
        setRangeValue(value)
    };

    const { t } = useTranslation()

    return (
        <div className='TwoCars parent'>
            <div className="left gap-1">
                <div className="texts gap-1">
                    <h1 className="title">Tesla Model Y</h1>
                    <p className="big-text">{t("price")}:34.000 $</p>
                    <p className="big-text c1">{t("rasxod")}: 100.000 {t("sum")} / 10.000 {t("km")}</p>
                </div>
                <img src={Img1} alt="img" className="img" />
            </div>
            <div className="middle gap-1">
                <h1 className="title">{rangeValue} {t("km")}</h1>
                <input type="range" className='range' min={0} max={650} value={rangeValue} onChange={(e) => changeRange(e.target.value)} />
            </div>
            <div className="right">
                <div className="texts gap-1">
                    <h1 className="title">Equenox Chevrolet</h1>
                    <p className="big-text">{t("price")}:35.000 $</p>
                    <p className="big-text c1">{t("rasxod")}: 100.000 {t("sum")} / 10.000 {t("km")}</p>
                </div>
                <img src={Img2} alt="img" className="img" />
            </div>
        </div>
    );
};

export default TwoCars;