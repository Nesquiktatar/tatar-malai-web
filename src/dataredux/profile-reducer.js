import {profileAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

import userPhoto from '../assets/images/user.svg'

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

let initialState = {
    userPostsData: [
        {id: 1, postText: 'some text for first post'},
        {id: 2, postText: 'some text for second post'},
        {id: 3, postText: 'some text for third post'}
    ],
    friendsData: [
        {id: 1, name: 'Mikle', userPhoto: userPhoto},
        {id: 2, name: 'Mikle2', userPhoto: userPhoto},
        {id: 3, name: 'Mikle3', userPhoto: userPhoto},
        {id: 4, name: 'Mikle4', userPhoto: userPhoto},
    ],
    profile: null,
    status: ''

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            return {
                ...state,
                userPostsData: [...state.userPostsData, {id: 4, postText: action.newMsgBody}]
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state, userPostsData: state.userPostsData.filter(p => p.id !== action.postId)
            }
        case SAVE_PHOTO_SUCCESS:
            debugger
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
}

//--------------------------------------------------------------ACTION--CREATORS----------------------------------------
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})
export const setProfileStatus = (status) => ({type: SET_STATUS, status: status})
export const addPost = (newMsgBody) => ({type: ADD_POST, newMsgBody: newMsgBody})
export const deletePost = (postId) => ({type: DELETE_POST, postId: postId})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos: photos})

//-------------------------------------------------------------------THUNKS---------------------------------------------
export const getUserProfileThunk = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfileInfo(userId);
    dispatch(setUserProfile(response.data))
}

export const getStatusThunk = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfileStatus(userId)
    dispatch(setProfileStatus(response.data))
}

export const updateStatusThunk = (status) => async (dispatch) => {

    let response = await profileAPI.putStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setProfileStatus(response.data))
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfileThunk(userId))
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0]);
        //Мб димыч распарсит ошибку, чтобы она отображалась на конректном инпуте
        //dispatch(stopSubmit('edit-profile', {'contacts': { 'facebook' : response.data.messages[0]}}))
    }
}

export default profileReducer;