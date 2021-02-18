import axios from 'axios';
import {setPosts} from "../redux/actions/postAction";
const instance = axios.create({
    baseURL: 'api/'
})

// export const postsApi = {
//     getPosts(dispatch){
//         return instance.get('posts')
//             .then(response => {
//                 console.log(response.data)
//                 return dispatch(setPosts((dispatch) => dispatch(response.data)))
//             })
//     }
// }


