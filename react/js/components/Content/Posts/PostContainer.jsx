import React from 'react';
import Post from "./Post";
import {PostsAPI as postsAPI} from "../../../api";
import {compose} from "redux";
import {connect} from "react-redux";
import {requestPost} from "../../../redux/posts-reducer";

class PostContainer extends React.Component {
    componentDidMount() {
        this.props.getPost(1);
        console.log('props ---', this.props)
    }

    render() {
        return (
            <Post title={this.props.post.title}
                  category={'travel'}
                  content={this.props.post.content}
                  img={this.props.post.image}
                  src_image={this.props.post.src_image}
                  postCreateDate={this.props.post.created_at}
            />
        )
    }
}

const getPost = (state) => {
    return state.postsReducer.post;
}
let mapStateToProps = (state) => {
    //console.log('state == ', state)
    return {
        post: getPost(state)
    }
}

export default compose(connect(mapStateToProps, {getPost: requestPost}))(PostContainer)
