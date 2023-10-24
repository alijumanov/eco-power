import React, { useState } from 'react';
import '../styles/TwoCars.scss';
import { useTranslation } from 'react-i18next';
import FirstImg1 from '../assets/images/car1.png';
import FirstImg2 from '../assets/images/car2.png';
import FirstImg3 from '../assets/images/car1.png';
import FirstImg4 from '../assets/images/car1.png';
import FirstImg5 from '../assets/images/car1.png';
import FirstImg6 from '../assets/images/car1.png';
import FirstImg7 from '../assets/images/car1.png';
import SecondImg1 from '../assets/images/car2.png';
import SecondImg2 from '../assets/images/car1.png';
import SecondImg3 from '../assets/images/car2.png';
import SecondImg4 from '../assets/images/car2.png';
import SecondImg5 from '../assets/images/car2.png';
import SecondImg6 from '../assets/images/car2.png';
import SecondImg7 from '../assets/images/car2.png';
import { dataSpeedCars } from '../api/api';
import { getDescription, getName } from '../languages/language';

const TwoCars = () => {

    const [rangeValue, setRangeValue] = useState(1);

    function changeRange(value) {
        setRangeValue(value)
    };

    const { t } = useTranslation()

    return (
        <div className='TwoCars parent'>
            <div className="middle gap-1">
                <h1 className="title">{(Math.ceil(rangeValue) + 2) * 100} {t("km")}</h1>
                <input type="range" className='range' min={1} max={5} value={rangeValue} onChange={(e) => changeRange(e.target.value)} />
            </div>
            {dataSpeedCars?.map((item) => (
                item?.id == rangeValue &&
                <div key={item?.id} className="right">
                    <img src={item?.image} alt="img" className="img" />
                    <div className="texts gap-1">
                        <h1 className="sub-title">{getName(item)}</h1>
                        {getDescription(item)?.split(';')?.map((c, index) => (
                            <div key={index} className="desc big-text pd-05 round-05">{c}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TwoCars;