import React from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import PostContainer from "./Posts/PostContainer";
import Login from "../Login/Login";
import Registration from "../Login/Registration";
import AddPostContainer from "../AddPost/AddPostContainer";
import {getCookie} from "../../utils/cookie/cookie";

const Content = () => {
    return (
        <div className="content-box">
            <Switch>
                {/*<Route path='/' render={() => <PostContainer />}/>*/}
                <Route exact path='/' render={() => <PostContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>
                <Route path={'/register'} render={() => <Registration/>}></Route>
                <Route path={'/addpost'} render={() => <AddPostContainer/>}></Route>
                <Route path={'*'} render={() => <h2>404 Not Found</h2>}></Route>
            </Switch>
        </div>
    )
}
export default Content;
