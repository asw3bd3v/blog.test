import axios from 'axios';
import {getCookie} from "../../utils/cookie";
export const createPost = (data) =>{
    console.log('data', data.get('image'));
    axios.post(`api/posts/store`, data, {headers: {'Authorization': 'Bearer ' + getCookie('token')}})
        .then(response => {
            console.log(response)
        })
}

