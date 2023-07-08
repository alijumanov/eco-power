import React, { useState } from 'react';
import '../styles/Contacts.scss';
import { useTranslation } from 'react-i18next';
import { InstagramIcon, TelegramIcon } from '../assets/svgicons';

const Contacts = ({ changeModal }) => {

    // form options

    const [userData, setUserData] = useState({
        name: "",
        number: ""
    });

    function changeValue(e) {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    };

    let bot = {
        TOKEN: "6251683792:AAEukRcQLX_Iy0a3fif1h0vMgZv-lFArq4E",
        chatID: "-1001916084677",
        message: `%0A👤 Ismi: ${userData.name} %0A📞 Telefon raqami: ${userData.number}`
    };

    function sendMessage(e) {
        e.preventDefault();
        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `, {
            method: "GET"
        })
            .then(success => {
                console.log('send message')
            }, error => {
                console.log(error)
            })

        changeModal();
        setUserData({
            name: "",
            number: ""
        })
    };

    const { t } = useTranslation();

    return (
        <div className='Contacts parent'>
            <div className="wrapper">
                <div className="texts gap-1">
                    <h1 className="sub-title">{t("contact1")}</h1>
                    <p className="big-text">{t("contact_txt")}</p>
                    <div className="socials gap-2 mtop-1">
                        <a href="https://www.instagram.com/ecopoweruz/" target={'_blank'} className="social text gap-1">
                            <div className="icon">
                                <InstagramIcon />
                            </div>
                            {t("instagram")}
                        </a>
                        <a href='https://t.me/ecopoweruz' target={'_blank'} className="social text gap-1">
                            <div className="icon">
                                <TelegramIcon />
                            </div>
                            {t("telegram")}
                        </a>
                    </div>
                </div>
                <form onSubmit={sendMessage} className="forms gap-1 pd-2 round-07">
                    <input type="text" name='name' value={userData.name} minLength={3} min={3} required onChange={changeValue} placeholder={`${t("contact2")}`} className='big-text input pd-1 round-05' />
                    <input type="number" name="number" value={userData.number} minLength={4} min={4} required onChange={changeValue} placeholder={`${t("contact3")}`} className='big-text input pd-1 round-05' />
                    <button type='onsubmit' className='explore big-text round-05 pd-1 scale-05'>{t("contact")}</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;