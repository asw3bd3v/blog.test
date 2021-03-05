import React, {useEffect, useState} from 'react';
import Post from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {getPost} from "../redux/actions/postAction";
import {Route} from "react-router-dom";
import EditPost from "./EditPost";

const PostContainer = ({userId, token, categories, tags, postId, setPostId}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (postId) {
            dispatch(getPost(postId))
        }
    }, [postId])
    const post = useSelector(({postReducer}) => postReducer.post)
    return (
        <React.Fragment>
            <Route path={'/post'}>
                <Post
                    key={post[0].id}
                    id={post[0].id}
                    title={post[0].title}
                    description={post[0].content}
                    category={post[0].category.title}
                    tags={post[0].tags}
                    srcImage={post[0].src_image}
                    date={post[0].date}
                    slug={post[0].slug}
                    userCreateId={post[0].user_id}
                    userAuthId={userId}
                    setPostId={setPostId}
                />
            </Route>
            <Route path={'/editPost'}>
                <EditPost
                    token={token}
                    categories={categories}
                    tags={tags}
                    title={post[0].title}
                    description={post[0].content}
                    category={post[0].category.title}
                    selectedTags={post[0].tags.map(item => item.id)}
                    srcImage={post[0].src_image}
                    preDescription={post[0].description}
                    id={post[0].id}
                />
            </Route>

        </React.Fragment>
    );
};

export default PostContainer;