import React from 'react';

const Post = () => {
    return (
        <div className="post">
            <a href="" className={'post-image'}><img src="" alt=""/></a>
            <div className="post-content">
                <a className="post-category">cetegory</a>
                <a className="post-title">title</a>
                <div className="post-preDescription">preDescription</div>
                <div className="post-description">description</div>
                <a className="post-continue__reading">continue__reading</a>
                <div className="tags">
                    <a href="">tag 1</a>
                    <a href="">tag 2</a>
                    <a href="">tag 3</a>
                </div>
                <div className="post-footer">
                    <div className="post-footer__date">date</div>
                    <div className="post-footer__social">
                        <a href="">vk</a>
                        <a href="">fb</a>
                        <a href="">tg</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
