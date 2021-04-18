import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import PostContext from '../context/PostContext'
import FormNewPost from './FormNewPost';

function NewPost({history}) {

    const { postNew, editID, postEdit } = useContext(PostContext);


    const [value, setValue] = useState('');
    const handleSubmit = () => {
        if (postEdit !== null) {
            postNew({id: Number(editID), content: value })
            postEdit(null);
        }   
        history.push('/')   
        // history.push('/') производит редирект на домашнюю страницу
    };




    return (
        <FormNewPost info={{name: 'content', label: 'Create post', value: value}} onSubmit={handleSubmit} onChange={ (value) => setValue(value)}></FormNewPost>
    )
}

NewPost.propTypes = {

}

export default NewPost

