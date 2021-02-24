import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {createPost} from "../redux/actions/createPost";
import {getPosts} from "../redux/actions/postAction";
import {useDispatch} from "react-redux";

const CreatePost = ({token, tags, categories}) => {
        let defaultCategoriesId = categories.reduce((acc, curr) => acc.id < curr.id ? acc : curr);
        const dispatch = useDispatch();
        const [isCreate, setIsCreate] = useState(false);
        return (
            <React.Fragment>
                {isCreate && <Redirect from={'/create_post'} to="/"/>}
                {!token ?
                    <Redirect from={'/login'} to="/"/>
                    :
                    <div className={'login-form'}>
                        <h1>Создание поста</h1>
                        <Formik
                            initialValues={{
                                title: '',
                                image: '',
                                category_id: defaultCategoriesId.id,
                                tags: [],
                                description: '',
                                content: '',
                            }}

                            onSubmit={async (values) => {
                                await new Promise((r) => setTimeout(r, 500));
                                let formData = new FormData();
                                formData.append('category_id', values.category_id)
                                formData.append('image', values.image)
                                formData.append('title', values.title)
                                formData.append('tags', values.tags)
                                formData.append('description', values.description)
                                formData.append('content', values.content)
                                dispatch(createPost(formData, setIsCreate));

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
                                                categories.map((category, index) => {
                                                    // if(index === 0){
                                                    //     return <option key={category.id} value={category.id} id={category.id}>{category.title}</option>
                                                    // }
                                                    return <option key={category.id} value={category.id}
                                                                   id={category.id}>{category.title}</option>
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
                                            {tags.map(tag => <option key={tag.id} value={tag.id}
                                                                     id={tag.id}>{tag.title}</option>)}
                                        </Field>
                                    </div>
                                    <div className="form-row">
                                        <label htmlFor="description">Краткое описание</label>
                                        <Field id={'description'} as={'textarea'} name={'description'}
                                               placeholder={'Введите краткое описание статьи'}/>
                                    </div>
                                    <div className="form-row">
                                        <label htmlFor="content">Описание</label>
                                        <Field id={'content'} as={'textarea'} name={'content'}
                                               placeholder={'Введите статью'}/>
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
