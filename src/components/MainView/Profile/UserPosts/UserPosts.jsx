import React from 'react';
import * as s from './UserPosts.styles';
import Post from './Post';
import {reduxForm} from 'redux-form';
import {buildField, Textarea} from '../../../common/FormsControls/FormsControls';
import Button from "../../../common/Button/Button";


const AddPostForm = (props) => {


    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                {buildField('enter your post', 'addPostForm', [], Textarea)}
                <s.Button>
                    <Button btnText='ADD'/>
                </s.Button>
            </form>
        </div>
    )
}

const AddPostReduxForm = reduxForm({form: 'ProfileAddPostForm'})(AddPostForm)

const UserPosts = (props) => {

    let UserPostsDataElements = props.profilePage.userPostsData.map(p => <Post message={p.postText} key={p.id}/>)

    let onAddPost = (values) => {
        props.addPost(values.addPostForm);
    }

    return (
        <s.UserPosts>
            <AddPostReduxForm onSubmit={onAddPost}/>
            <h3>My posts </h3>
            {UserPostsDataElements}
        </s.UserPosts>
    )
}


export default UserPosts;