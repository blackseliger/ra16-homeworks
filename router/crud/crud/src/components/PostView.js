import React, { useContext, useState, useEffect } from 'react';
import PostContext from '../context/PostContext';
import Card from './Card';
import NewPost from './NewPost';
import Page404 from './Page404';


function PostView({ match, history }) {

    const {posts, postDelete, postEdit } = useContext(PostContext);
    const { id } = match.params;
    
    const [ post, setPosts ] = useState();

 
    useEffect(() => {
        setPosts(posts.find(( post) => Number(post.id) === Number(id)))
        return () => {}
    }, [posts, id]
    
    )

    const handleClose = () => {
        postDelete(Number(id))
        history.push('/');
    }

    const handleEdit = () => {
         postEdit(id)
        history.replace('/posts/new')
    }

    return (
         
        post && <Card info={post}  onClose={handleClose} onEdit={handleEdit}></Card> || <Page404 />
    )
}

export default PostView
