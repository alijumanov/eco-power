import React, { useState } from 'react';
import '../styles/FAQ.scss';
import { useQuery } from 'react-query';
import { fetchFAQData } from '../api/api';
import { AngleDown } from '../assets/svgicons';
import { getQuestion, getAnswer } from '../languages/language';

const FAQ = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    // data of FAQ

    const { data } = useQuery('faq', fetchFAQData);

    const dataFAQ = data?.data;

    return (
        <div className='FAQ parent'>
            <div className="wrapper">
                <div className="questions gap-1">
                    {data?.data?.map((item) => (
                        <div key={item.id} className="bar round-05 pd-1-5">
                            <div className="question">
                                <h4 className="big-text">{getQuestion(item)}</h4>
                                <div onClick={() => activeIndex != dataFAQ?.indexOf(item) ? setActiveIndex(dataFAQ?.indexOf(item)) : setActiveIndex(null)} className={`icon ${activeIndex == dataFAQ?.indexOf(item) && "active-icon"}`}>
                                    <AngleDown />
                                </div>
                            </div>
                            <div className={`answer ${activeIndex == dataFAQ?.indexOf(item) && "active-answer"}`}>
                                <p className="big-text">{getAnswer(item)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;