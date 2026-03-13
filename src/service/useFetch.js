// src/service/useFetch.js
import { useState, useEffect } from 'react';

export default function useFetch(fetchFn) {
    const [data, setData]       = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError]     = useState('');

    useEffect(() => {
        fetchFn()
            .then(setData)
            .catch(() => setError('Failed to load'))
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
}