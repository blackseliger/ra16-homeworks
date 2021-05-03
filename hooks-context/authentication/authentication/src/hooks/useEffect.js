import { useEffect, useState } from 'react';

const { REACT_APP_AUTH_URL } = process.env

function useUserInfo(url = `${REACT_APP_AUTH_URL}/private/news`, token) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
        try {
            const responce = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${token.token}`
                }
            })
            if (!responce.ok){
                console.log(responce.statusText)
            }
            const data = await responce.json();
            setData(data);
            setError(null);
        } catch(e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    }

    fetchData();

            return () => {};
        }, [token, url]);

    return [{data, loading, error}]    
}

export default useUserInfo;