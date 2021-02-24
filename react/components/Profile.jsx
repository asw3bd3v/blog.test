import React from 'react';
import {Redirect} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {putProfile} from "../redux/actions/authAction";

const Profile = ({token, userData}) => {
    let srcAvatar = 'uploads/' + userData.avatar;
    return (
        <React.Fragment>
            {!token ?
                <Redirect from={'/profile'} to="/profile"/>
                :
                <div className={'login-form'}>
                    <h1>Профиль</h1>
                    <Formik
                        initialValues={{
                            name: userData.name,
                            password: '',
                            avatar: srcAvatar,
                            email: '',
                        }}

                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            let formData = new FormData();
                            formData.append('name', values.name)
                            formData.append('password', values.password)
                            formData.append('avatar', values.avatar)
                            formData.append('email', values.email)
                            putProfile(userData.id, formData);
                        }}
                    >
                        {({values, setFieldValue}) => (
                            <Form>
                                <div className="form-row">
                                    <label htmlFor="name">Имя пользователя</label>
                                    <Field id={'name'} name={'name'} placeholder={'Введите имя пользователя'}/>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="email">Email</label>
                                    <span id={'email'} name={'email'}>{userData.email}</span>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="password ">Новый пароль</label>
                                    <Field id={'password '} name={'password '}
                                           placeholder={'Введите новый пароль'}/>
                                </div>
                                <div className="form-row avatar">
                                    <label htmlFor="avatar">Аватар</label>
                                    <input id={'avatar'} type={'file'} name={'avatar'} onChange={(event) => {
                                        setFieldValue("avatar", event.currentTarget.files[0]);
                                    }}/>
                                    {userData.avatar && <img src={srcAvatar} />}
                                </div>

                                <button type={'subscribe'}>Изменить</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            }
        </React.Fragment>
    );
};

export default Profile;