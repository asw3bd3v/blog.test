import React from 'react';
import AddPost from "./AddPost";
import {compose} from "redux";
import {connect} from "react-redux";
import {requestCategories} from "../../redux/posts-reducer";

class AddPostContainer extends React.Component{
    componentDidMount() {
        this.props.getCategories()
        //let options = this.props.categories.map(item => <option value={item.title}>{item.title}</option>);
    }
    render(){
        return(
            <AddPost categories={this.props.categories}/>
        )
    }
}
const getCategories = (state) => {
    return state.postsReducer.categories;
}
let mapStateToProps = (state) => {
    return {
        categories: getCategories(state)
    }
}


export default compose(connect(mapStateToProps, {getCategories: requestCategories}))(AddPostContainer)
