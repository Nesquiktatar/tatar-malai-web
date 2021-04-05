import {profileAPI as dialogsAPI} from '../api/api';

const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';
const PUT_DIALOGS = 'dialogs/PUT_DIALOGS';

let initialState = {

    dialogsNavElData: [
        {name: 'Mike', id: '1'},
        {name: 'Katty', id: '2'},
        {name: 'Jake', id: '3'},
        {name: 'Lolu', id: '4'},
        {name: 'John', id: '5'},
    ],
    messagesDataIncoming: [
        {id: 1, message: 'first message'},
        {id: 2, message: 'second message'},
        {id: 3, message: 'third message'},
    ],
    messagesDataOutgoing: [
        {id: 1, message: 'first message'},
        {id: 2, message: 'second message'},
        {id: 3, message: 'third message'},
    ],

    newMessageText: 'NEW MESSAGE'

}


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            return {
                ...state,
                messagesDataOutgoing: [...state.messagesDataOutgoing, {id: 4, message: action.mewMsgBody}]
            }
        case PUT_DIALOGS:
            return {
                ...state,
                messagesDataOutgoing: [...state.messagesDataOutgoing, {id: 4, message: action.mewMsgBody}]
            }
        default:
            return state
    }
}

//--------------------------------------------------------------ACTION--CREATORS----------------------------------------
export const sendMessage = (mewMsgBody) => ({type: SEND_MESSAGE, mewMsgBody});
export const setDialogs = (mewMsgBody) => ({type: PUT_DIALOGS, mewMsgBody});

//-------------------------------------------------------------------THUNKS---------------------------------------------
export const startChatThunk = (userId) => async (dispatch) => {
    let response = await dialogsAPI.putStartChatting(userId);
    dispatch(setDialogs(response.data))
}

export const getAllDialogsTC = () => async (dispatch) => {
    let response = await dialogsAPI.getDialogsAll();
    dispatch(setDialogs(response.data))
}

export const getUserDialogTC = (userId, currentPage, pageSize) => async (dispatch) => {
    let response = await dialogsAPI.getDialogsUser(userId, currentPage, pageSize);
    dispatch(setDialogs(response.data))
}

export const sendMessageTC = (userId,body) => async (dispatch) => {
    let response = await dialogsAPI.postDialogsSendMessage(userId,body);
    dispatch(setDialogs(response.data))
}

export const messageViewedTC = (messageId) => async (dispatch) => {
    let response = await dialogsAPI.getDialogsMessageViewed(messageId);
    dispatch(setDialogs(response.data))
}

export const messageToSpamTC = (messageId) => async (dispatch) => {
    let response = await dialogsAPI.postDialogsMessageToSpam(messageId);
    dispatch(setDialogs(response.data))
}

export const deleteMessageTC = (messageId) => async (dispatch) => {
    let response = await dialogsAPI.deleteDialogsMessage(messageId);
    dispatch(setDialogs(response.data))
}

export const restoreMessageTC = (messageId) => async (dispatch) => {
    let response = await dialogsAPI.putRestoreDialogsMessage(messageId);
    dispatch(setDialogs(response.data))
}

export const refreshDialogTC = (userId, data) => async (dispatch) => {
    let response = await dialogsAPI.getDialogsRefreshDialog(userId, data);
    dispatch(setDialogs(response.data))
}

export const getDialogsTC = () => async (dispatch) => {
    let response = await dialogsAPI. getDialogsList();
    dispatch(setDialogs(response.data))
}



export default dialogsReducer;