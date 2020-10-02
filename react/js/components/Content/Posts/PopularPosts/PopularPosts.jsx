import React from 'react';

const PopularPosts = (props) => {
    return (
        <div className={'popular-posts'}>
            <PopularPost/>
            <PopularPost/>
            <PopularPost/>
        </div>
    )
}
const PopularPost = (props) => {
    return (
        <div>
            <a href=""><img src="" alt=""/></a>
            <div className={'popular-post__title'}>Home is peaceful place</div>
            <div className={'popular-post__date'}>Febuary 15, 2016</div>
        </div>
    )
}
export default PopularPosts;
