import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {editPost, getPosts} from "../redux/actions/postAction";
import {useDispatch} from "react-redux";

const EditPost = ({
                      token,
                      tags,
                      categories,
                      title,
                      description,
                      category,
                      srcImage,
                      selectedTags,
                      preDescription,
                      id
                  }) => {
        const dispatch = useDispatch();
        const [isEdit, setIsEdit] = useState(false);
        return (
            <React.Fragment>
                {isEdit && <Redirect from={'/create_post'} to="/"/>}
                {!token ?
                    <Redirect from={'/login'} to="/"/>
                    :
                    <div className={'login-form'}>
                        <h1>Изменение поста</h1>
                        <Formik
                            initialValues={{
                                title: title,
                                image: null,
                                category_id: category,
                                tags: selectedTags,
                                description: preDescription,
                                content: description,
                            }}

                            onSubmit={async (values) => {
                                //await new Promise((r) => setTimeout(r, 500));
                                let formData = new FormData();
                                formData.append('category_id', values.category_id)
                                if (values.image !== null) {
                                    formData.append('image', values.image)
                                }
                                formData.append('title', values.title)
                                formData.append('tags', values.tags)
                                formData.append('description', values.description)
                                formData.append('content', values.content)
                                formData.append('_method', 'put')
                                dispatch(editPost(formData, setIsEdit, id));

                            }}
                        >
                            {({values, setFieldValue}) => (
                                <Form>
                                    <div className="form-row">
                                        <label htmlFor="title">Название</label>
                                        <Field id={'title'} name={'title'} placeholder={'Введите название'}/>
                                    </div>
                                    <div className="form-row form-row__img">
                                        <label htmlFor="image">Изображение</label>
                                        <input id={'image'} type={'file'} name={'image'} onChange={(event) => {
                                            setFieldValue("image", event.currentTarget.files[0]);
                                            let fr = new FileReader();
                                            fr.addEventListener("load", function (e) {
                                                document.querySelector('#post-img').src = e.target.result
                                            }, false);
                                            fr.readAsDataURL(event.currentTarget.files[0]);
                                        }}/>
                                        <img src={srcImage} id={'post-img'} alt=""/>
                                    </div>
                                    <div className="form-row">
                                        <label htmlFor="tags">Катергории</label>
                                        <Field id={'category_id'} as="select" name={'category_id'}>
                                            {
                                                categories.map((category) => {
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

                                    <button type={'subscribe'}>Изменить</button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                }
            </React.Fragment>
        );
    }
;

export default EditPost;
