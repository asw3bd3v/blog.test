import React from 'react';
import {FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaInstagramSquare} from 'react-icons/fa'
import {Link} from "react-router-dom";

const Post = ({title, description, preDescription, category, srcImage, date, tags, id, slug, setIdViewPost, index}) => {
    const test = () => {
        setIdViewPost(index)
    }
    return (
        <div className="post">
            <Link to={slug} className={'post-image'} onClick={test}>
                <div>
                    <span>VIEW POST</span>
                </div>
                <img src={srcImage} alt=""/>
            </Link>
            <div className="post-content">
                <a className="post-category">{category}</a>
                <a className="post-title">{title}</a>

                {preDescription &&
                <div className="post-preDescription" dangerouslySetInnerHTML={{__html: preDescription}}></div>
                }
                {description &&
                <div className="post-description" dangerouslySetInnerHTML={{__html: description}}></div>
                }
                {preDescription &&
                <Link to={slug} className="post-continue__reading post-button">Продолжить чтение</Link>
                }
                {description &&
                <div className="tags">
                    {tags.map(tag => <a key={tag.id} className={'post-button'} href="">{tag.title}</a>)}
                </div>
                }
                <div className="post-footer">
                    <div className="post-footer__date">{date}</div>
                    <div className="post-footer__social">
                        <a href=""><FaFacebookF/></a>
                        <a href=""><FaTwitter/></a>
                        <a href=""><FaGooglePlusG/></a>
                        <a href=""><FaLinkedinIn/></a>
                        <a href=""><FaInstagramSquare/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
