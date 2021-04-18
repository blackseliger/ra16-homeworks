import React, { useContext, useState, useEffect } from 'react';
import PostContext from '../context/PostContext';
import Card from './Card';
import Page404 from './Page404';


function PostView({ match, history }) {

    const {posts, postDelete } = useContext(PostContext);
    const { id } = match.params;
    
    const [ post, setPosts ] = useState();

    useEffect(() => {
        setPosts(posts.find(( post) => Number(post.id) === Number(id)))
        return () => {}
    }, [posts, id]
    
    )

    const handleClose = () => {
        postDelete(id)
        history.push('/');
    }

    return (
        post && <Card info={post}  onClose={handleClose}></Card> || <Page404 />
    )
}

export default PostView
