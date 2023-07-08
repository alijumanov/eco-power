import { useEffect, useRef, useState } from "react";
import Modal from "./components/Modal";
import About from "./components/About";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import HomeRouter from "./routes/HomeRouter";
import Categories from "./components/Categories";
import ScrollToTop from "./components/ScrollToTop";
import ContactModal from "./components/ContactModal";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  // modal

  const [showModal, setShowModal] = useState(false);

  function changeModal() {
    setShowModal(!showModal)
  };

  // contact-modal

  const [prodValue, setProdValue] = useState("");
  const [showContactModal, setShowContactModal] = useState(false);

  function changeProdValue(item) {
    setProdValue(item);
    changeContactModal();
  };

  function changeContactModal() {
    setShowContactModal(!showContactModal)
  };

  // react-query

  const queryClient = new QueryClient();

  // navbar scrolling pages

  const faqPage = useRef();
  const aboutPage = useRef();
  const topCarsPage = useRef();
  const usedCarsPage = useRef();
  const advantagePage = useRef();
  const calculatePage = useRef();
  const categoriesPage = useRef();
  const videoReviewsPage = useRef();

  function changeScrollFaq() {
    setTimeout(() => {
      window.scrollTo(0, faqPage.current.offsetTop)
    }, 100);
  };

  function changeScrollAbout() {
    setTimeout(() => {
      window.scrollTo(0, aboutPage.current.offsetTop)
    }, 100);
  };

  function changeScrollTopCars() {
    setTimeout(() => {
      window.scrollTo(0, topCarsPage.current.offsetTop)
    }, 100);
  };

  function changeScrollUsedCars() {
    setTimeout(() => {
      window.scrollTo(0, usedCarsPage.current.offsetTop)
    }, 100);
  };

  function changeScrollAdvantage() {
    setTimeout(() => {
      window.scrollTo(0, advantagePage.current.offsetTop)
    }, 100);
  };

  function changeScrollCalculate() {
    setTimeout(() => {
      window.scrollTo(0, calculatePage.current.offsetTop)
    }, 100);
  };

  function changeScrollCategories() {
    setTimeout(() => {
      window.scrollTo(0, categoriesPage.current.offsetTop)
    }, 100);
  };

  function changeScrollVideoReviews() {
    setTimeout(() => {
      window.scrollTo(0, videoReviewsPage.current.offsetTop)
    }, 100);
  };

  // loader

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false)
    }, 2000);
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {showLoader &&
          <Loader />
        }
        <ScrollToTop />
        <Navbar changeScrollFaq={changeScrollFaq} changeScrollAbout={changeScrollAbout} changeScrollTopCars={changeScrollTopCars} changeScrollCategories={changeScrollCategories} changeScrollVideoReviews={changeScrollVideoReviews} />
        <Routes>
          <Route path="/" element={<HomeRouter changeProdValue={changeProdValue} faqPage={faqPage} aboutPage={aboutPage} topCarsPage={topCarsPage} categoriesPage={categoriesPage} videoReviewsPage={videoReviewsPage} usedCarsPage={usedCarsPage} advantagePage={advantagePage} calculatePage={calculatePage} />} />
          <Route path="/about" element={<About changeModal={changeModal} />} />
          <Route path="/categories/:id" element={<Categories changeProdValue={changeProdValue} />} />
          <Route path="/all-products" element={<Categories changeProdValue={changeProdValue} />} />
          <Route path="/products/:id" element={<Products changeProdValue={changeProdValue} />} />
        </Routes>
        <Footer changeScrollAdvantage={changeScrollAdvantage} changeScrollFaq={changeScrollFaq} changeScrollCalculate={changeScrollCalculate} changeScrollUsedCars={changeScrollUsedCars} changeScrollAbout={changeScrollAbout} changeScrollTopCars={changeScrollTopCars} changeScrollCategories={changeScrollCategories} changeScrollVideoReviews={changeScrollVideoReviews} />
        {showModal &&
          <Modal changeModal={changeModal} />
        }
        {showContactModal &&
          <ContactModal changeModal={changeModal} changeContactModal={changeContactModal} prodValue={prodValue} />
        }
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
