import React, {useState} from 'react';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.svg'
import ProfileDataForm from './ProfileDataForm';
import ProfileData from './ProfileData';
import sm from './Profile.module.css'

const ProfileInfo = ({
                         profile, status, updateStatus, isOwner, savePhoto, saveProfile
                     }) => {

    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    //Исправить поставить флажок редактированя в бизнес. Т.к. неправильно ждать выполнение диспатча здесь
    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        })

    }

    return (
        <div className={sm.container}>
            <div className={sm.photo}>
                <label htmlFor='imgDownload'>
                <img src={profile.photos.large || userPhoto} alt="userPhoto"/>
                </label>
            </div>
            <div className={sm.status}>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <div className={sm.imgDownload}>
                {isOwner && <input id='imgDownload' type="file" onChange={onMainPhotoSelected} src={userPhoto}/>}
            </div>
            <div className={sm.description}>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}
            </div>
        </div>
    )
}


export default ProfileInfo;
