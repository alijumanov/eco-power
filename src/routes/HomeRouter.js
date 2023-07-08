import React from 'react';
import FAQ from '../components/FAQ';
import CEO from '../components/CEO';
import Header from '../components/Header';
import WhySell from '../components/WhySell';
import TwoCars from '../components/TwoCars';
import UsedCars from '../components/UsedCars';
import HomeAbout from '../components/HomeAbout';
import Galleries from '../components/Galleries';
import Advantages from '../components/Advantages';
import TopProducts from '../components/TopProducts';
import VideoReviews from '../components/VideoReviews';
import HomeCategories from '../components/HomeCategories';
import StagesCooperation from '../components/StagesCooperation';

const HomeRouter = ({ changeProdValue, faqPage, aboutPage, topCarsPage, categoriesPage, videoReviewsPage, usedCarsPage, advantagePage, calculatePage }) => {
    return (
        <>
            <Header changeProdValue={changeProdValue} />
            <div ref={categoriesPage}>
                <HomeCategories />
            </div>
            <div ref={usedCarsPage}>
                <UsedCars changeProdValue={changeProdValue} />
            </div>
            <div ref={topCarsPage}>
                <TopProducts changeProdValue={changeProdValue} />
            </div>
            <StagesCooperation topCarsPage={topCarsPage} />
            <div ref={calculatePage}>
                <TwoCars />
            </div>
            <div ref={advantagePage}>
                <Advantages />
            </div>
            <div ref={aboutPage}>
                <HomeAbout />
            </div>
            <WhySell />
            <div ref={videoReviewsPage}>
                <VideoReviews />
            </div>
            <CEO />
            <Galleries />
            <div ref={faqPage}>
                <FAQ />
            </div>
        </>
    );
};

export default HomeRouter;