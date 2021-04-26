import PostContext from '../context/PostContext';
import React, {useContext} from 'react';
function ProfileAuth() {
    const { profileContent } = useContext(PostContext)
    const { data } = profileContent;
    return (
        <div>
            <div className={data.login} id={data.id}>{data.name}</div>
            <img src={data.avatar} alt={data.login}></img>
        </div>
    )
}

export default ProfileAuth
