import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './main.css'
import Header from "./Header/Header";
import {HashRouter, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import store from "../redux/redux-store";
import Subscribe from "./Subscribe/Subscribe";
import PopularPosts from "./Content/Posts/PopularPosts/PopularPosts";
import {compose} from "redux";
import Content from "./Content/Content";

/* An example React component */
class Main extends Component {

    render() {
        return (
            <HashRouter>
                <Provider store={store}>
                    <div>
                        <Header/>
                        <div className="container content">
                            <Content />
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
