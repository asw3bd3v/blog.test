import React, {useEffect, useState} from 'react';
import Post from "../components/Post";
import {useDispatch, useSelector} from "react-redux";
import {getCategories, getChangedPosts, getPosts, getPostsByCategory, getTags} from "../redux/actions/postAction";
import {Route} from "react-router-dom";
import Login from "../components/Login";
import Registration from "../components/Registration";
import CreatePost from "../components/CreatePost";
import Profile from "../components/Profile";
import {getProfile} from "../redux/actions/authAction";
import EditPost from "../components/EditPost";
import PostContainer from "../components/PostContainer";
import Pagination from "../components/Pagination";

const Home = ({token}) => {
    const perPage = 5;
    const [postId, setPostId] = useState(null);
    const [totalPosts, setTotalPosts] = useState(null)
    const posts = useSelector(({postsReducer}) => postsReducer.posts);
    const categories = useSelector(({categoriesReducer}) => categoriesReducer.categories);
    const tags = useSelector(({tagsReducer}) => tagsReducer.tags);
    const userData = useSelector(({authReducer}) => authReducer.userData);
    const dispatch = useDispatch();
    const onPageChanged = (pageNum) => {
        dispatch(getChangedPosts(pageNum, perPage))
    }
    useEffect(() => {
        dispatch(getPosts(setTotalPosts, perPage));
        dispatch(getCategories());
        dispatch(getTags());
        dispatch(getProfile());
        dispatch(getPostsByCategory(setTotalPosts, 2, perPage))
    }, []);
    return (
        <React.Fragment>
            <div className="posts">
                <Route exact path={'/'}>
                    {
                        posts.map((post, index) => {
                            return <Post
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                preDescription={post.description}
                                category={post.category.title}
                                srcImage={post.src_image}
                                date={post.date}
                                slug={post.slug}
                                index={index}
                                setPostId={setPostId}
                            />
                        })
                    }

                </Route>
                <PostContainer userId={userData.id} token={token} categories={categories} tags={tags} postId={postId} setPostId={setPostId}/>
                <Route path={'/login'}>
                    <Login token={token}/>
                </Route>
                <Route path={'/registration'}>
                    <Registration token={token}/>
                </Route>
                <Route path={'/create_post'}>
                    <CreatePost token={token} categories={categories} tags={tags}/>
                </Route>

                <Route path={'/profile'}>
                    <Profile token={token} userData={userData}/>
                </Route>
                <Route exact path={'/'}>
                    {totalPosts && <Pagination total={totalPosts} perPage={perPage} onPageChanged={onPageChanged}/>}
                </Route>
            </div>
            <aside className="aside"></aside>
        </React.Fragment>
    )
}

export default Home;
