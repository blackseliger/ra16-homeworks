import React, {useContext} from 'react';
import PostContext from '../context/PostContext';
import ProfileContent from './ProfileContent';
import ProfileForm from './ProfileForm'

function ProfileList() {
    const {  profileContent } = useContext(PostContext)
    const { data, error } = profileContent;
    console.log(data);
    return (
        <div>
            {data === null ? 
                        <ProfileForm /> 
                        : <ProfileContent />}
        </div>

    )
}

export default ProfileList
