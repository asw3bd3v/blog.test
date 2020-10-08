import React from 'react';
import Post from "./Post";
import {PostsAPI as postsAPI} from "../../../api";
import {compose} from "redux";
import {connect} from "react-redux";
import {requestCategories, requestPost} from "../../../redux/posts-reducer";

class PostContainer extends React.Component {
    componentDidMount() {
        this.props.getPost(1);
        this.props.getCategories();
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
const getCategories = (state) => {
    return state.postsReducer.categories;
}
const getPost = (state) => {
    return state.postsReducer.post;
}
let mapStateToProps = (state) => {
    //console.log('state == ', state)
    return {
        post: getPost(state),
        categories: getCategories(state)
    }
}

export default compose(connect(mapStateToProps, {getPost: requestPost, getCategories: requestCategories}))(PostContainer)
