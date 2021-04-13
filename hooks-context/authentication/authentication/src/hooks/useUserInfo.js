import {useState, useEffect } from 'react';

import React from 'react'

function useUserInfo(url = '/private/news', token) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const responce = await fetch(url, {
                    headers: {
                     'Authorization': `Bearer ${token.token}`  
                    }
                })
                if (!responce.ok) {
                    throw new Error(responce.statusText);
                };
                const data = await responce.json();
                setData(data);
                setError(null);
            } catch (e) {
                setError(e)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
        return () => {};
    }, [token.token])

    return [{data, loading, error}]
}

export default useUserInfo
