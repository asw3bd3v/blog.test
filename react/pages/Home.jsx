import React, {useEffect} from 'react';
import Post from "../components/Post";
import {useDispatch} from "react-redux";
import {fetchPosts} from "../redux/actions/postAction";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
           //dispatch(postsApi.getPosts((dispatch)));
        dispatch(fetchPosts());
    })
    return (
        <div>
            <div className="posts">
                <Post />
            </div>
            <aside className="aside"></aside>
        </div>
    )
}

export default Home;
