import axios from 'axios';


export const getPosts = () => (dispatch) => {
    axios.get('api/posts')
        .then(response => {
            dispatch(setPosts(response.data.data))
        })
}
export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    payload: posts
})

export const getCategories = () => (dispatch) => {
    axios.get('api/categories')
        .then(response => {
            dispatch(setCategories(response.data))
        })
}
export const setCategories = (categories) => ({
    type: 'SET_CATEGORIES',
    payload: categories
})
export const getTags = () => (dispatch) => {
    axios.get('api/tags')
        .then(response => {
            dispatch(setTags(response.data))
        })
}
export const setTags = (tags) => ({
    type: 'SET_TAGS',
    payload: tags
})
