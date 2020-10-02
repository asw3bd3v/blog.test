import React from 'react';
import Field from "redux-form/lib/Field";
import {Input} from "../../utils/FormsControls";
import {reduxForm} from "redux-form";

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Input} validate={[]} name={'email'} placeholder={'email'}/></div>
            <div><Field component={Input} validate={[]} name={'password'} type={'password'} placeholder={'password'}/></div>
            <div><Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me</div>
            <div><button>Login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = () => {
    return(
        <LoginReduxForm />
    )
}
export default Login;
