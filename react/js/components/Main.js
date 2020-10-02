import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './main.css'
import Header from "./Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Content from "./Content/Content";
import {Provider} from "react-redux";
import store from "../redux/redux-store";
import Subscribe from "./Subscribe/Subscribe";
import PopularPosts from "./Content/Posts/PopularPosts/PopularPosts";
import PostContainer from "./Content/Posts/PostContainer";
import Login from "./Login/Login";

/* An example React component */
class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <div>
                        <Header/>
                        <div className="container content">
                            <div className="content-box">
                                <Route path='/' render={() => <PostContainer/>} />
                                <Route path='/app/login' render={() => <Login/>} />

                            </div>
                            <aside className={'aside'}>
                                <Subscribe/>
                                <PopularPosts/>
                            </aside>
                        </div>
                    </div>
                </Provider>
            </BrowserRouter>
        );
    }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
    ReactDOM.render(<Main/>, document.getElementById('root'));
}
