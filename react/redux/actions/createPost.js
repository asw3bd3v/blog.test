import axios from 'axios';
import {getCookie} from "../../utils/cookie";
import {getPosts} from "./postAction";
export const createPost = (data, setIsCreate) => (dispatch) =>{
    console.log('data', data.get('image'));
    axios.post(`api/posts/store`, data, {headers: {'Authorization': 'Bearer ' + getCookie('token')}})
        .then(response => {
            console.log(response.data.status)
            if(response.data.status === 1){
                setIsCreate(true);
                dispatch(getPosts());
            }
        })
}

