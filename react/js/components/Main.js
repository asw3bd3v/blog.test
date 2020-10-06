import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './main.css'
import Header from "./Header/Header";
import {BrowserRouter, NavLink, Route, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import store from "../redux/redux-store";
import Subscribe from "./Subscribe/Subscribe";
import PopularPosts from "./Content/Posts/PopularPosts/PopularPosts";
import PostContainer from "./Content/Posts/PostContainer";
import Login from "./Login/Login";
import {compose} from "redux";

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
                                    <Route exact path='/' component={PostContainer}/>
                                    <Route path='/login' component={Login}/>
                            </div>
                            <aside className={'aside'}>
                                <NavLink to={'/login'}>login</NavLink>
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
const mapStateToProps = (state) => ({

});
let MainContainer = compose(
    withRouter,
    connect({}, {}))(Main);

export default MainContainer;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
    ReactDOM.render(<Main/>, document.getElementById('root'));
}
