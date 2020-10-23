import React from 'react';
import AddPost from "./AddPost";
import {compose} from "redux";
import {connect} from "react-redux";
import {requestCategories, requestTags} from "../../redux/posts-reducer";

class AddPostContainer extends React.Component {
    componentDidMount() {
        this.props.getCategories();
        this.props.getTags();

    }

    render() {
        //console.log('props ==',this.props)
        //let options = this.props.categories.map(item => <option key={item.id} value={item.title}>{item.title}</option>);
        return (
            <AddPost {...this.props} />
        )
    }
}

const getCategories = (state) => {
    return state.postsReducer.categories;
}
const getTags = (state) => {
    return state.postsReducer.tags;
}
const mapStateToProps = (state) => {
    return {
        categories: getCategories(state),
        tags: getTags(state)
    }
}


export default compose(connect(mapStateToProps, {getCategories: requestCategories, getTags: requestTags}))(AddPostContainer)
