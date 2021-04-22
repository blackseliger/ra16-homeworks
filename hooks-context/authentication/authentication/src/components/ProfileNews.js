import PostContext from '../context/PostContext';
import React, {useContext} from 'react';
function ProfileNews() {
    const { profileNews } = useContext(PostContext)
    console.log(profileNews);
    // const {login, name, avatar} = 
    return (
        <div>
            
        </div>
    )
}

export default ProfileNews
