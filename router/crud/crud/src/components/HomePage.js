import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import PostContext from '../context/PostContext';
import Card from './Card'

function HomePage({history}) {

    const { posts, loading } = useContext(PostContext);

    return (
        <div className='homePage'>
            <button>
                <Link to='/posts/new'>{'Create post'}</Link>
            </button>
            <div className='listPosts'>
                { loading && <div>{'Loading...'}</div>}
                { posts.map((post) => <Card key={post.id} info={post} onClick={() => history.push(`/posts/${post.id}`)}></Card>)}
            </div>
        </div>
    )
}

HomePage.propTypes = {

}

export default HomePage

