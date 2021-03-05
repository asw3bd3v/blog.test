import React from 'react';
import {Field, Form, Formik} from "formik";
import {registration} from "../redux/actions/authAction";
import {useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";
import {validateEmail, validatePassword, validateRequired} from "../utils/validateForm";

const Registration = ({token}) => {
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
                            name: '',
                            email: '',
                            password: '',
                        }}
                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            dispatch(registration(values));
                            //dispatch(loginAuth(values));
                        }}
                    >
                        {({errors, touched}) => (
                        <Form>
                            <div className="form-row">
                                <label htmlFor="name">Имя</label>
                                <Field id={'name'} name={'name'} validate={validateRequired} className={errors.name && touched.name && 'input-error'} placeholder={'Введите имя'}/>
                                {errors.name && touched.name && <div className={'field-error'}>{errors.name}</div>}
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">Email</label>
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

export default Registration;
