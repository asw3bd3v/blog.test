import React from 'react';
import Post from "./Post";
import {compose} from "redux";
import {connect} from "react-redux";
import {requestPost} from "../../../redux/posts-reducer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

class PostContainer extends React.Component {
    componentDidMount() {
        this.props.getPost(1);
        console.log(this.props);
    }

    render() {
        //console.log('123',this.props.post[0])
        return (
            <Post title={this.props.post[0].title}
                  category={'travel'}
                  content={this.props.post[0].content}
                  img={this.props.post[0].image}
                  src_image={this.props.post[0].src_image}
                  postCreateDate={this.props.post[0].created_at}
            />
        )
    }
}

const getPost = (state) => {
    //console.log('posts', state.postsReducer.post);
    return state.postsReducer.post;
}
let mapStateToProps = (state) => {
    return {
        post: getPost(state)
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
        {getPost: requestPost})
)(PostContainer)
