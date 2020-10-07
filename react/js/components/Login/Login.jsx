import React from 'react';
import {Input} from "../../utils/FormsControls";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <div>
            <h2>Login</h2>
            <form className={'form'} onSubmit={props.handleSubmit}>
                <div><Field type={'text'} component={Input} name={'email'} placeholder={'email'}/></div>
                <div><Field component={Input} name={'password'} type={'password'} placeholder={'password'}/></div>
                <label className={'remember-me'}><Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me</label>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = () => {
    return (
        <LoginReduxForm/>
    )
}
export default Login;
