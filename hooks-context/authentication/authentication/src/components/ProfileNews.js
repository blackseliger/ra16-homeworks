import PostContext from '../context/PostContext';
import React, {useContext} from 'react';
function ProfileNews() {
    const { profileNews } = useContext(PostContext)
    console.log(profileNews);
    const { data, loading, error } = profileNews;
    console.log(`${loading}`)
    console.log(error);
    return (
        <div>
            {(error === null ) ? data.map((e) => 
            <div className={e.title} key={e.id}>
                <span>{e.title}</span>
                <img src={e.image} alt={e.title}></img>
            </div>) : <span>{loading}</span>}
        </div>
    )
}

export default ProfileNews
