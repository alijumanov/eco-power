import axios from 'axios';
import CarImg1 from '../assets/images/speed1.png';
import CarImg2 from '../assets/images/speed2.png';
import CarImg3 from '../assets/images/speed3.png';
import CarImg4 from '../assets/images/speed4.png';
import CarImg5 from '../assets/images/speed5.png';
import { BRANDS_API_URL, CARS_API_URL, FAQ_API_URL, GALLERIES_API_URL, SLIDER_API_URL, TOP_CARS_API_URL, VIDEOS_API_URL } from './apiUrl';

// API of categories

export const fetchCategoriesData = () => {
    return axios.get(BRANDS_API_URL)
};

// API of products

export const fetchCarsData = () => {
    return axios.get(CARS_API_URL)
};

// API of top products

export const fetchTopCarsData = () => {
    return axios.get(TOP_CARS_API_URL)
};

// API of videos

export const fetchVideosData = () => {
    return axios.get(VIDEOS_API_URL)
};

// API of galleries

export const fetchGalleriesData = () => {
    return axios.get(GALLERIES_API_URL)
};

// API of FAQ

export const fetchFAQData = () => {
    return axios.get(FAQ_API_URL)
};

// API of Slider

export const fetchSliderData = () => {
    return axios.get(SLIDER_API_URL)
};

// speed cars

export const dataSpeedCars = [
    { id: 1, image: CarImg1, name_uz: "BYD Seagull", name_ru: "BYD Seagull", name_en: "BYD Seagull", description_uz: "BYD brendi; SEAGULL modeli; Kruiz masofasi, km 405 gacha; Akkumulyator quvvati, kVt/soat 30,8; Quvvat, ot kuchi 75; Dvigatel turi: elektr", description_ru: "Марка BYD; Модель SEAGULL; Запас хода, км до 405; Емкость батареи, кВт/ч 30.8; Мощность, л.с. 75; Тип двигателя электрический", description_en: "Brand BYD; Model SEAGULL; Power reserve, km up to 405; Battery capacity, kW/h 30.8; Power, hp 75; Engine type: electric" },
    { id: 2, image: CarImg2, name_uz: "BYD E2", name_ru: "BYD E2", name_en: "BYD E2", description_uz: "Byd elektr avtomobil markasi; Chiqarilgan yili 2021; Yoqilg'i turi elektr; Umumiy batareya quvvati kVt 43,2; Maksimal quvvat (hp) 95; NEDC diapazoni (km) 400", description_ru: "Марка электромобиля Byd; Год выпуска 2021; Тип топлива Электрический; Общая мощность аккумулятора кВт 43.2; Максимальная мощность (л.с.) 95; Диапазон NEDC (км) 400", description_en: "Electric car brand Byd; Year of release 2021; Fuel type Electric; Total battery power kW 43.2; Maximum power (hp) 95; NEDC range (km) 400" },
    { id: 3, image: CarImg3, name_uz: "BYD Yuan", name_ru: "BYD Yuan", name_en: "BYD Yuan", description_uz: "Quvvat zaxirasi - NEDC 430 - 510 km; Batareya quvvati - 50,0 - 60,0 kVt soat; Dvigatel - 150 kVt / 204 ot kuchi; Olchamlari - 4455 × 1875 × 1615 mm; 100 km/soatgacha tezlashuv - 7,3 s.; Shina o'lchami - R17 / R18", description_ru: "Запас хода - NEDC 430 - 510 км; Емкость батареи - 50.0 - 60.0 кВт.ч; Двигатель - 150 кВт / 204 л.с.; Габариты - 4455 × 1875 × 1615 мм; Разгон до 100 км/ч - 7.3 с.; Размер шин - R17 / R18", description_en: "Power reserve - NEDC 430 - 510 km; Battery capacity - 50.0 - 60.0 kWh; Engine - 150 kW / 204 hp; Dimensions - 4455 × 1875 × 1615 mm; Acceleration to 100 km/h - 7.3 s.; Tire size - R17 / R18" },
    { id: 4, image: CarImg4, name_uz: "BYD Song Champion ", name_ru: "BYD Song Champion ", name_en: "BYD Song Champion ", description_uz: "BYD brendi; Model SONG PLUS 2023 Restyling; Quvvat zaxirasi, km 605 gacha; Batareya quvvati, kVt/soat 87,04 gacha; Quvvat, ot kuchi 218 gacha; Dvigatel turi: elektr", description_ru: "Марка BYD; Модель SONG PLUS 2023 Рестайлинг; Запас хода, км до 605; Емкость батареи, кВт/ч до 87.04; Мощность, л.с. до 218; Тип двигателя электрический", description_en: "Brand BYD; Model SONG PLUS 2023 Restyling; Power reserve, km up to 605; Battery capacity, kW/h up to 87.04; Power, hp up to 218; Engine type: electric" },
    { id: 5, image: CarImg5, name_uz: "BYD Tang", name_ru: "BYD Tang", name_en: "BYD Tang", description_uz: "Umumiy batareya quvvati kVt 108,8; Maksimal quvvat (hp) 517; Dvigatel quvvati (kVt) 380; Maksimal tezlik (km/soat) 180; Tezlashuv 0-100 km/soat 4,4 sek; AC zaryadlash vaqti (sekin) 6 soat", description_ru: "Общая мощность аккумулятора кВт 108.8; Максимальная мощность (л.с.) 517; Мощность двигателя (Квт) 380; Максимальная скорость (км / ч) 180; Разгон 0-100 км/ч 4.4 сек; Время зарядки переменного тока (медленная) 6 часов", description_en: "Total battery power kW 108.8; Maximum power (hp) 517; Engine power (kW) 380; Maximum speed (km/h) 180; Acceleration 0-100 km/h 4.4 sec; AC charging time (slow) 6 hours" },
];