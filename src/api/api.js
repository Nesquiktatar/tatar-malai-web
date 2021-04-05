import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '72ca07f9-1473-4b0f-a5e3-191417a2709d'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    getSearchUser(currentPage = 1, pageSize = 10, term) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${term}`)
            .then(response => {
                return response.data;
            })
    },
    getFriends(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&friend=${true}`)
            .then(response => {
                return response.data;
            })
    },
    unfollow(userId = 2) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId = 2) {
        return instance.post(`follow/${userId}`)
    }
}

export const profileAPI = {
    getProfileInfo(userId) {
        return instance.get(`profile/${userId}`)
    },
    getProfileStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    putStatus(status){
        return instance.put(`profile/status`,{status: status})
    },
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile){
        return instance.put(`profile`, profile )
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
    },
        login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

export const securityAPI ={
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}

/*
export const dialogsAPI = {

    //start chatting, refresh your companion so that he was on top
    putStartChatting(userId){
        return instance.put(`dialogs/${userId}`)
    },
    //get all dialogs
    getDialogsAll(){
        return instance.get(`dialogs`)
    },
    //get list of messages with your friend
    getDialogsUser(userId, currentPage = 1, pageSize = 10){
        return instance.get(`dialogs/${userId}/messages?page=${currentPage}&count=${pageSize}`)
    },
    //send message to your friend
    postDialogsSendMessage(userId,body){
        return instance.post(`dialogs/${userId}/messages`, {body: body})
    },
    //is your message viewed
    getDialogsMessageViewed(messageId){
        return instance.get(`dialogs/messages/${messageId}/viewed`)
    },
    //put message to spam
    postDialogsMessageToSpam(messageId){
        return instance.post(`dialogs/messages/${messageId}/spam`)
    },
    //delete message only for you, not for your companion
    deleteDialogsMessage(messageId){
        return instance.delete(`dialogs/messages/${messageId}`)
    },
    //restore your message form deleted and spam
    putRestoreDialogsMessage(messageId){
        return instance.put(`dialogs/messages/${messageId}/restore`)
    },
    //return messages newest than date
    //date - (string) - desired date (string in date format)
    getDialogsRefreshDialog(userId,date){
        return instance.get(`dialogs/${userId}/messages/new?newerThen=${date}`)
    },
    //list of new messages
    getDialogsList(){
        return instance.get(`dialogs/messages/new/count`)
    }

}*/
