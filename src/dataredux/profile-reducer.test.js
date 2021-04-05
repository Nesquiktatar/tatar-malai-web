import profileReducer, {addPost, deletePost} from './profile-reducer';

let state = {
    userPostsData: [
        {id: 1, postText: 'some text for first post'},
        {id: 2, postText: 'some text for second post'},
        {id: 3, postText: 'some text for third post'}
    ]
}

test('length of posts should be incremented', () => {
    let action = addPost('New post text')

    let newState = profileReducer(state,action)

    expect(newState.userPostsData.length).toBe(4)
});

test('message of new Post should be correct', () => {
    let action = addPost('New post text')

    let newState = profileReducer(state,action)

    expect(newState.userPostsData[3].postText).toBe('New post text')
});

test('after deleting posts.length should be decrement', () => {
    let action = deletePost(1)

    let newState = profileReducer(state,action)

    expect(newState.userPostsData.length).toBe(2)
});

test('after deleting posts.length should not be decrement, if id is incorrect', () => {
    let action = deletePost(1000)

    let newState = profileReducer(state,action)

    expect(newState.userPostsData.length).toBe(3)
});


