import React, { useState, useEffect } from 'react';
import PostContext from '../context/PostContext';
import useStorage from './useStorage';
import useUserInfo from './useEffect';

const { REACT_APP_AUTH_URL } = process.env

function ProviderPostContext(props) {
    const [ token, setToken ] = useStorage(localStorage, 'token');
    const [ profile, setProfile ] = useStorage(localStorage, 'profile', true);
    const [ profileContent, setProfileContent] = useUserInfo(`${REACT_APP_AUTH_URL}/private/me`, token)
    const [ profileNews, setProfileNews] = useUserInfo( `${REACT_APP_AUTH_URL}/private/news`, token)
    

    const handleSubmit = evt => {
        evt.preventDefault();
        const formData = new FormData(evt.target);
        const fetchData = async() => {
            const responce = await fetch(`${REACT_APP_AUTH_URL}/auth`, {
                method: 'POST',
                body: formData
            })
            if (!responce.ok) {
                setToken(null)
                console.log(responce.statusText)
            }
            const token = await responce.json();
            setToken(token)
        }
        fetchData();
    }

    useEffect(() => {
        setProfile(profileContent)
    }, []);

    return (
    <PostContext.Provider value = {{handleSubmit, token, profile, profileContent, profileNews}}>
        {props.children}
    </PostContext.Provider>
    )
}

export default ProviderPostContext