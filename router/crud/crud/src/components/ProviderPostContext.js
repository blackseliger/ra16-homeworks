import React, { useState, useEffect } from 'react';
import PostContext from '../context/PostContext';


function ProviderPostContext(props) {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);


    const postUpdate = () => {
        fetch(process.env.REACT_APP_CRUD_URL)
        .then(response => response.json())
        .then( posts => {
            setPosts(posts);
            if (loading) setLoading(false);
        })
    }

    useEffect(postUpdate, []);

    const postNew = ({id = 0, content}) => {
        fetch(process.env.REACT_APP_CRUD_URL, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },

            method: 'POST',
            body: JSON.stringify({id, content})
        })
        .then(postUpdate);
    };

    const postDelete = (id) => {
        fetch(`${process.env.REACT_APP_CRUD_URL}/${id}`, {method: `DELETE`})
        .then(postUpdate);
    }

    return (
        <PostContext.Provider value={{posts, loading, postNew, postDelete }}>
            {props.children}
        </PostContext.Provider>
    )
}

export default ProviderPostContext
