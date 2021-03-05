import axios from 'axios';
import {getCookie} from "../../utils/cookie";

export const getPosts = (setTotalPosts, perPage) => (dispatch) => {
    axios.get(`api/posts?perPage=${perPage}`)
        .then(response => {
            //console.log(response)
            dispatch(setPosts(response.data.data))
            setTotalPosts(response.data.total)
        })
}
export const getChangedPosts = (page, perPage) => (dispatch) => {
    axios.get(`api/posts?page=${page}&perPage=${perPage}`)
        .then(response => {
            dispatch(setPosts(response.data.data))
            //setTotalPosts(response.data.total)
        })
}
export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    payload: posts
})
export const getPost = (id) => (dispatch) => {
    axios.get(`api/posts/${id}`)
        .then(response => {
            dispatch(setPost(response.data))
        })
}
const setPost = (post) => ({
    type: 'SET_POST',
    payload: post,
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

export const createPost = (data, setIsCreate) => (dispatch) =>{

    axios.post(`api/posts/store`, data, {headers: {'Authorization': 'Bearer ' + getCookie('token')}})
        .then(response => {
            console.log(response.data.status)
            if(response.data.status === 1){
                setIsCreate(true);
                dispatch(getPosts());
            }
        })
}
export const editPost = (data, setIsEdit, id) => (dispatch) =>{
    console.log(123)
    axios.post(`/api/posts/update/${id}`, data, {headers: {'Authorization': 'Bearer ' + getCookie('token')}})
        .then(response => {
            console.log(response.data.status)
            if(response.data.status === 1){
                setIsEdit(true);
                dispatch(getPosts());
            }
        })
}


