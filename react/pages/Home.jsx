import React, {useEffect, useState} from 'react';
import Post from "../components/Post";
import {useDispatch, useSelector} from "react-redux";
import {getCategories, getPosts, getTags} from "../redux/actions/postAction";
import {Route} from "react-router-dom";
import Login from "../components/Login";
import Registration from "../components/Registration";
import CreatePost from "../components/CreatePost";
import Profile from "../components/Profile";
import {getProfile} from "../redux/actions/authAction";

const Home = ({token}) => {
    const [viewPost, setViewPost] = useState(0);
    const posts = useSelector(({postsReducer}) => postsReducer.posts);
    const categories = useSelector(({categoriesReducer}) => categoriesReducer.categories);
    const tags = useSelector(({tagsReducer}) => tagsReducer.tags);
    const userData = useSelector(({authReducer}) => authReducer.userData);
    //const userToken = useSelector(({authReducer}) => authReducer.userData.api_token);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
        dispatch(getCategories());
        dispatch(getTags());
        dispatch(getProfile());
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
                                setIdViewPost={setViewPost}
                                index={index}
                            />
                        })
                    }

                </Route>
                <Route path={'/' + posts[viewPost].slug}>
                    <Post
                        key={posts[viewPost].id}
                        id={posts[viewPost].id}
                        title={posts[viewPost].title}
                        description={posts[viewPost].content}
                        category={posts[viewPost].category.title}
                        tags={posts[viewPost].tags}
                        srcImage={posts[viewPost].src_image}
                        date={posts[viewPost].date}
                        slug={posts[viewPost].slug}
                    />
                </Route>
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

            </div>
            <aside className="aside"></aside>
        </React.Fragment>
    )
}

export default Home;
