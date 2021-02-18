import axios from 'axios';


export const fetchPosts = () => (dispatch) => {
    axios.get('api/posts')
        .then(response => {
            dispatch(setPosts(response.data.data))
        })
}
export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    payload: posts
})
