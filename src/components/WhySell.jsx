import React from 'react';
import '../styles/WhySell.scss';
import Img1 from '../assets/images/why1.png';
import Img2 from '../assets/images/why2.png';
import Img3 from '../assets/images/why3.png';
import Img4 from '../assets/images/why4.png';
import { useTranslation } from 'react-i18next';

const WhySell = () => {

    const { t } = useTranslation();

    return (
        <div className='WhySell parent'>
            <div className="wrapper gap-2">
                <h1 className="sub-title">{t("afzallik")}</h1>
                <div className="infos gap-2 mtop-1">
                    <div className="info gap-1">
                        <img src={Img1} alt="img" className='img' />
                        <h1 className="name mtop-1">{t("afzallik_name1")}</h1>
                        <p className="text">{t("afzallik_desc1")}</p>
                    </div>
                    <div className="info gap-1">
                        <img src={Img2} alt="img" className='img' />
                        <h1 className="name mtop-1">{t("afzallik_name2")}</h1>
                        <p className="text">{t("afzallik_desc2")}</p>
                    </div>
                    <div className="info gap-1">
                        <img src={Img3} alt="img" className='img' />
                        <h1 className="name mtop-1">{t("afzallik_name3")}</h1>
                        <p className="text">{t("afzallik_desc3")}</p>
                    </div>
                    <div className="info gap-1">
                        <img src={Img4} alt="img" className='img' />
                        <h1 className="name mtop-1">{t("afzallik_name4")}</h1>
                        <p className="text">{t("afzallik_desc4")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhySell;