import { createContext } from 'react';

const PostContext = createContext({
    token: null,
    profile: null
})

export default PostContext;