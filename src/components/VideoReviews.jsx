import React from 'react';
import '../styles/VideoReviews.scss';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { fetchVideosData } from '../api/api';
import { PlayIcon } from '../assets/svgicons';
import { useTranslation } from 'react-i18next';

const VideoReviews = () => {

    // data of videos

    const { data } = useQuery('videos', fetchVideosData);

    const { t } = useTranslation();

    return (
        <div className='VideoReviews parent'>
            <div className="wrapper gap-2">
                <div className="top">
                    <h1 className="sub-title">{t("obzor")}</h1>
                    <Link to="/all-products" className="big-text explore">
                        {t("all_model")}
                        <div className="icon"><PlayIcon /></div>
                    </Link>
                </div>
                <div className="videos gap-1">
                    <div className="left">
                        {data?.data?.slice(0, 1)?.map((item) => (
                            <div key={item.id} className="video">
                                <iframe src={`https://www.youtube.com/embed/${item.description_uz}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        ))}
                    </div>
                    <div className="right gap-1">
                        {data?.data?.slice(1)?.map((item) => (
                            <div key={item.id} className="video">
                                <iframe src={`https://www.youtube.com/embed/${item.description_uz}?showinfo=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoReviews;