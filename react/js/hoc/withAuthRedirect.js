import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.authReducer.isAuth,
    test: 'tewst'
})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {

        render() {
            console.log(this.props)
            if (this.props.isAuth.length == 0) {
                return <Redirect to={'/login'}/>
            }
            return <Component {...this.props}/>

        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}
