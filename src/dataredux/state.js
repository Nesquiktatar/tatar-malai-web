/*
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        dialogsPage: {
            dialogsNavElData: [
                {name: 'Mike', id: '1'},
                {name: 'Katty', id: '2'},
                {name: 'Jake', id: '3'},
                {name: 'Lolu', id: '4'},
                {name: 'John', id: '5'},
            ],
            messagesData: [
                {id: 1, message: 'first message'},
                {id: 2, message: 'second message'},
                {id: 3, message: 'third message'},
            ],
            newMessageText: 'NEW MESSAGE'
        },
        profilePage: {
            userPostsData: [
                {id: 1, postText: 'some text for first post'},
                {id: 2, postText: 'some text for second post'},
                {id: 3, postText: 'some text for third post'}
            ],
            newPostText: 'POST TEXT',
            profile: null
        }

    },
    _callSubscriber() {
        console.log('State was changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}



export default store;

*/
