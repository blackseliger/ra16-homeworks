import React, {useContext} from 'react';
import PostContext from '../context/PostContext';

function ProfileForm() {
    const { handleSubmit } = useContext(PostContext)
    return (
        <div className='formProfile'>
        <form onSubmit={handleSubmit}>
            <input id='login' name='login' placeholder='Login...' required />
            <input id='password' name='password' placeholder='Password...' required />
            <button type='submit'>Login</button>
        </form>
    </div>
    )
}

export default ProfileForm
