import {PostsAPI} from "../api";

const SET_POST = 'SET_POST';
const SET_CATEGORIES = 'SET_CATEGORIES';
const SET_TAGS = 'SET_TAGS';
let initialState = {
    post: [{
        "id": 1,
        "title": "1",
        "content": "1",
        "category_id": 1,
        "image": "1",
        "description": "1"
    }],
    categories: [
        {id: 2, title: "Наука"},
        {id: 3, title: "Юмор"},
    ],
    tags: [
        {
            "id": 1,
            "title": "Тег 1",
            "slug": "teg-1",
            "created_at": "2020-09-29 07:07:09",
            "updated_at": "2020-09-29 07:07:09"
        },
    ]
}

const postsReducer = (state = initialState, action) => {
    //console.log(action)
    switch (action.type) {
        case SET_POST: {
            return {
                ...state,
                post: action.post
            }
        }
        case SET_CATEGORIES: {
            return {
                ...state,
                categories: action.categories
            }
        }
        case SET_TAGS: {
            return {
                ...state,
                tags: action.tags
            }
        }
        default:
            return state;
    }
}

export const setPost = (post) => ({type: SET_POST, post});
export const getPost = (post) => async (dispatch) => {
    let response = await PostsAPI.getPost(post);
    dispatch(setPost(response.data));
}
export const requestPost = (post) => {
    return async (dispatch) => {
        let data = await PostsAPI.getPost(post)
        //console.log(data)
        dispatch(setPost(data))

    }
}

export const savePost = (post) => {
    PostsAPI.savePost(post)
}

export const setCategories = (categories) => ({type: SET_CATEGORIES, categories});
export const getCategories = () => async (dispatch) => {
    let response = await PostsAPI.getCategories();
    dispatch(setCategories(response.data));
}

export const requestCategories = () => {
    return async (dispatch) => {
        let data = await PostsAPI.getCategories();
        dispatch(setCategories(data))

    }
}

export const setTags = (tags) => ({type: SET_TAGS, tags});
export const requestTags = () => {
    return async (dispatch) => {
        let data = await PostsAPI.getTags();
        dispatch(setTags(data));
    }
}

export default postsReducer;
