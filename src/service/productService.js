// src/service/productService.js
import api from './api';

export const getProducts = async () => {
    const res = await api.get('/products');
    return res.data.data;
};

export const getFeaturedProducts = async () => {
    const res = await api.get('/products/featured');
    return res.data.data;
};

export const getCarouselProducts = async () => {
    const res = await api.get('/products/carousel');
    return res.data.data;
};

export const getProduct = async (id) => {
    const res = await api.get(`/products/${id}`);
    return res.data.data;
};