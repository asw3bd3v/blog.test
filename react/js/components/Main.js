import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './main.css'
import Header from "./Header/Header";
import {HashRouter, Route, Switch, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import store from "../redux/redux-store";
import Subscribe from "./Subscribe/Subscribe";
import PopularPosts from "./Content/Posts/PopularPosts/PopularPosts";
import PostContainer from "./Content/Posts/PostContainer";
import Login from "./Login/Login";
import {compose} from "redux";
import Registration from "./Login/Registration";
import AddPostContainer from "./AddPost/AddPostContainer";

/* An example React component */
class Main extends Component {
    render() {
        return (
            <HashRouter>
                <Provider store={store}>
                    <div>
                        <Header/>
                        <div className="container content">
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
                            <aside className={'aside'}>
                                <Subscribe/>
                                <PopularPosts/>
                            </aside>
                        </div>
                    </div>
                </Provider>
            </HashRouter>
        );
    }
}

const mapStateToProps = (state) => ({});
let MainContainer = compose(
    withRouter,
    connect({}, {}))(Main);

export default MainContainer;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
    ReactDOM.render(<Main/>, document.getElementById('root'));
}
