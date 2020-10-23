import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'api/',
});

export const PostsAPI = {
    getPost(postNum){
        return instance.get('posts/' + postNum)
            .then(response => {
                //console.log(response.data)
                return response.data;
            });
    },
    savePost(post){
      return instance.post('posts/store', post)
    },
    getCategories(){
        return instance.get('categories')
            .then(response => {
                //console.log(response.data);
                return response.data;
            })
    },
    getTags(){
        return instance.get('tags')
            .then(response => {
                return response.data;
            })
    }
}

