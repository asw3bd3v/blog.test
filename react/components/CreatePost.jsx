import React from 'react';
import {Redirect} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {createPost} from "../redux/actions/createPost";

const CreatePost = ({token, tags, categories}) => {
    return (
        <React.Fragment>
            {!token ?
                <Redirect from={'/login'} to="/"/>
                :
                <div className={'login-form'}>
                    <h1>Создание поста</h1>
                    <Formik
                        initialValues={{
                            title: '',
                            image: '',
                            category_id: '',
                            tags: [],
                            //date: '',
                            description: '',
                            content: '',
                        }}

                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            let formData = new FormData();
                            console.log(values.tags)
                            formData.append('category_id', values.category_id)
                            formData.append('image', values.image)
                            formData.append('title', values.title)

                            // for (var i = 0; i < values.tags.length; i++) {
                            //     formData.append('tags[]', values.tags[i]);
                            // }
                            formData.append('tags[]', values.tags)
                            //formData.append('date', values.date)
                            formData.append('description', values.description)
                            formData.append('content', values.content)

                            console.log(formData.get('tags[]'));

                            createPost(formData);
                        }}
                    >
                        {({values, setFieldValue}) => (
                            <Form>
                                <div className="form-row">
                                    <label htmlFor="title">Название</label>
                                    <Field id={'title'} name={'title'} placeholder={'Введите название'}/>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="image">Изображение</label>
                                    <input id={'image'} type={'file'} name={'image'} onChange={(event) => {
                                        setFieldValue("image", event.currentTarget.files[0]);
                                    }}/>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="tags">Катергории</label>
                                    <Field id={'category_id'} as="select" name={'category_id'}>
                                        {
                                            categories.map(category => {
                                                return <option key={category.id} value={category.id} id={category.id}>{category.title}</option>
                                            })
                                        }
                                    </Field>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="tags">Теги</label>
                                    <Field id={'tags'} as="select" name={'tags'} onChange={evt =>
                                        setFieldValue(
                                            "tags",
                                            [].slice
                                                .call(evt.target.selectedOptions)
                                                .map(option => option.value)
                                        )
                                    }
                                           multiple={true}>
                                        {tags.map(tag => <option key={tag.id} value={tag.id} id={tag.id}>{tag.title}</option>)}
                                    </Field>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="date">Дата</label>
                                    <Field id={'date'} name={'date'} placeholder={'Введите дату'}/>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="description">Краткое описание</label>
                                    <Field id={'description'} as={'textarea'} name={'description'}
                                           placeholder={'Введите краткое описание статьи'}/>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="content">Описание</label>
                                    <Field id={'content'} as={'textarea'} name={'content'}
                                           placeholder={'Введите стаью'}/>
                                </div>

                                <button type={'subscribe'}>Создать</button>
                            </Form>
                            )}
                    </Formik>
                </div>
            }
        </React.Fragment>
    );
}
;

export default CreatePost;
