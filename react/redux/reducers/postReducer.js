import {merge} from "lodash";

const initialState = {
    posts: [
        {
            id:1,
            title:"Пример статьи",
            slug:"testovaya-statya",
            content:"<p>Полное описание, вся статья",
            category_id:2,
            user_id:1,
            status:0,
            views:0,
            is_featured:1,
            created_at:"2020-09-29 07:05:00",
            updated_at:"2021-02-15 12:33:11",
            date:"02/09/20",
            image:"d3Ijo3QRF6.jpeg",
            description:"<p>Описание, краткое описание, немного текста</p>",
            src_image:"/uploads/d3Ijo3QRF6.jpeg",
            category: {
                title: 'test'
            },
            tags: [
                {title: 'tag 1', id: 1},
            ],
        }
    ]
}
export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POSTS':
            let newPosts = [...state.posts]
            //console.log('test', _.merge(newPosts, action.payload))
            return {
                ...state,
                posts: _.merge(newPosts, action.payload)

            }
        default:
            return {
                ...state
            }
    }
}
