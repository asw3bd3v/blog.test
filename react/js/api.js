import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'api/',
});

export const PostsAPI = {
    getPost(postNum){
        return instance.get('posts/' + postNum)
            .then(response => {
                //console.log('data form api ===',response.data)
                return response.data;
            });
    }
}
