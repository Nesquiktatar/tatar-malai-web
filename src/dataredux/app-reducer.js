import {getAuthUserData} from './auth-reducer';

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

let initialState = {

    themes: {

        bright: {
            bgColor1: `rgba(100, 125, 238, 0.8)`,
            bgColor2: `rgba(127, 83, 172, 0.8)`,
            fontColor: `rgba(19, 15, 64)`,
            fontColorSelected: `rgba(255, 255, 255)`,
            dividerColor: `rgba(169, 139, 199)`,
            selectedBackgroundCollapsedMode: `dark`
        },
        dark: {
            bgColor1: 'rgba(67, 67, 67, 0.8)',
            bgColor2: 'rgba(0, 0, 0, 0.8)',
            fontColor: `rgba(161, 161, 161)`,
            fontColorSelected: `rgba(255, 255, 255)`,
            dividerColor: `rgba(48, 48, 48)`,
            selectedBackgroundCollapsedMode: `bright`
        }
    },
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});


//заменить на async await-------------------------
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then (
        () => {
        dispatch(initializedSuccess());
    })


}

export default appReducer;