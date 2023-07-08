import axios from 'axios';
import { BRANDS_API_URL, CARS_API_URL, FAQ_API_URL, GALLERIES_API_URL, TOP_CARS_API_URL, VIDEOS_API_URL } from './apiUrl';

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