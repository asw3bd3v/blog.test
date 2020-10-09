import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'api/',
});

export const PostsAPI = {
    getPost(postNum){
        return instance.get('posts/' + postNum)
            .then(response => {
                return response.data;
            });
    },
    getCategories(){
        return instance.get('categories')
            .then(response => {
                return response.data;
            })
    },
}

