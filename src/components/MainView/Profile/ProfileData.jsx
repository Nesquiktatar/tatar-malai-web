import React from 'react';
import s from './Profile.module.css'

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <button id='edit' onClick={goToEditMode} className={s.editButton}>
                    edit
                </button>
            </div>}
            <label htmlFor="edit">
                <div className={s.wrapper}>
                    <div className={s.fullName}>
                        {profile.fullName}
                    </div>
                    <div className={s.lookingForJob}>
                        <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
                    </div>
                    <div className={s.skills}>
                            <b>My professional skills</b>:
                        <div>
                        {profile.lookingForAJobDescription}
                        </div>
                    </div>
                    <div className={s.aboutMe}>
                        <b>About me</b>:
                        <div>
                            {profile.aboutMe}
                        </div>
                    </div>
                    <div className={s.contacts}>
                        {Object.keys(profile.contacts).map(key => {
                            return <Contact key={key} contactTitle={key}
                                            contactValue={profile.contacts[key]}/>
                        })}
                    </div>
                </div>
            </label>
        </div>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contactsInside}>
            <b>{contactTitle}</b> : <a href={contactValue}>{contactValue}</a>


        </div>
    )
}


export default ProfileData;