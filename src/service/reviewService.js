import api from './api';

export const getReviews = async () => {
    const res = await api.get('/reviews');
    return res.data.data;
};