import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './main.css'
import {HashRouter} from "react-router-dom";
import Header from "../../components/Header";
import Home from "../../pages/Home";
import {Provider} from "react-redux";
import store from "../../redux/store";

/* An example React component */
class Main extends Component {
    render() {
        return (
            <HashRouter>
                <Provider store={store}>
                    <div className="wrapper">
                        <div className="content">
                            <div className="header-wrapper">
                                <div className="container">
                                    <Header/>
                                </div>
                            </div>

                            <div className="content-wrapper">
                                <div className="container">
                                    <Home/>
                                </div>
                            </div>
                        </div>
                        <div className="footer">Footer</div>
                    </div>
                </Provider>
            </HashRouter>
        );
    }
}

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
    ReactDOM.render(<Main/>, document.getElementById('root'));
}
