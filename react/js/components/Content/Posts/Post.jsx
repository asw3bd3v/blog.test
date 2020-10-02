import React, {useState} from 'react';
import {FaFacebookF} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {ImLinkedin2} from "react-icons/im";
import {AiOutlineGooglePlus, AiOutlineTwitter} from "react-icons/ai";


const Post = (props) => {
    let [isOpened, setIsOpened] = useState(false);
    let openPost = () => {
        setIsOpened(true);
    }


    return (
        <div>
            <img src={props.src_image} alt="post-image"/>
            <div className="post-subtitile">{props.category}</div>
            <h2 className="post-titile">{props.title}</h2>
            <p className="post-text">{props.content}</p>
            <div className="tags"></div>
            <div className="post-footer">
                <div className="create-post">{props.postCreateDate}</div>
                <div className="post-social">
                    <a href=""><FaFacebookF /></a>
                    <a href=""><FiInstagram /></a>
                    <a href=""><ImLinkedin2 /></a>
                    <a href=""><AiOutlineGooglePlus /></a>
                    <a href=""><AiOutlineTwitter /></a>
                </div>
            </div>
        </div>
    )
}

export default Post;
