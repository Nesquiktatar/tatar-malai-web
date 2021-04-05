import React from 'react';
import * as s from './UserPosts.styles';
import Post from './Post';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../../../common/FormsControls/FormsControls';


const AddPostForm = (props) => {


    return(
        <s.AddPostForm>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'enter your post'} name={'addPostForm'}
                            component={Textarea} cols="110" rows="5" validate={[]}/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
        </s.AddPostForm>
    )
}

const AddPostReduxForm = reduxForm ({form: 'ProfileAddPostForm'})(AddPostForm)

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