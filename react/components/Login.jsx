import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {loginAuth} from "../redux/actions/authAction";
import {useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";
import * as Yup from "yup";
import {validateEmail, validatePassword, validateRequired} from "../utils/validateForm";

const Login = ({token}) => {
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            {token ?
                    <Redirect from={'/login'} to="/"/>
                    :
                    <div className={'login-form'}>
                        <h1>Авторизация</h1>
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            onSubmit={async (values) => {
                                await new Promise((r) => setTimeout(r, 500));
                                //console.log(values)
                                dispatch(loginAuth(values));
                            }}
                        >
                            {({errors, status, touched}) => (
                            <Form>
                                <div className="form-row">
                                    <label htmlFor="Email">email</label>
                                    <Field id={'email'} name={'email'} validate={validateEmail} className={errors.email && touched.email && 'input-error'} placeholder={'Введите email'}/>
                                    {errors.email && touched.email && <div className={'field-error'}>{errors.email}</div>}
                                </div>
                                <div className="form-row">
                                    <label htmlFor="password">Пароль</label>
                                    <Field id={'password'} name={'password'} validate={validatePassword} className={errors.password && touched.password && 'input-error'} placeholder={'Введите пароль'}/>
                                    {errors.password && touched.password && <div className={'field-error'}>{errors.password}</div>}
                                </div>

                                <button type={'subscribe'}>Войти</button>
                            </Form>
                            )}
                        </Formik>
                    </div>
            }
        </React.Fragment>
    );
};

export default Login;
