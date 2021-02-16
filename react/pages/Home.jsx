import React, {useEffect, useState} from 'react';
import Post from "../components/Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/actions/postAction";
import {Route} from "react-router-dom";
import Login from "../components/Login";
import Registration from "../components/Registration";

const Home = () => {
    const [viewPost, setViewPost] = useState(0);
    const posts = useSelector(({postsReducer}) => postsReducer.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
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
                                //description={post.content}
                                category={post.category.title}
                                //tags={post.tags}
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
                        //preDescription={posts[viewPost].description}
                        description={posts[viewPost].content}
                        category={posts[viewPost].category.title}
                        tags={posts[viewPost].tags}
                        srcImage={posts[viewPost].src_image}
                        date={posts[viewPost].date}
                        slug={posts[viewPost].slug}
                    />
                </Route>
                <Route path={'/login'}>
                    <Login />
                </Route>
                <Route path={'/registration'}>
                    <Registration />
                </Route>
            </div>
            <aside className="aside"></aside>
        </React.Fragment>
    )
}

export default Home;
