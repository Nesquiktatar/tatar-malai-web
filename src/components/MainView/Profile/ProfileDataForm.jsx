import React from 'react';
import {buildField, Input, Textarea} from '../../common/FormsControls/FormsControls';
import {reduxForm} from 'redux-form';
import s from './Profile.module.css';

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button className={s.saveButton} id='save'>
                    save
                </button>
            </div>
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <label htmlFor="save">
                <div className={s.wrapper}>
                    <div className={s.fullName}>
                        {buildField('Full name', 'fullName', [], Input)}
                    </div>
                    <div className={s.lookingForJob}>
                        <b>Looking for a job</b>:
                            {buildField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
                    </div>
                    <div className={s.skills}>
                        <b>My professional skills</b>:
                        <div>
                            {buildField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
                        </div>
                    </div>
                    <div className={s.aboutMe}>
                        <b>About me</b>:
                        {buildField('About me', 'aboutMe', [], Textarea)}
                    </div>
                    <div className={s.contacts}>
                        {Object.keys(profile.contacts).map(key => {
                            return (
                                <div className={s.contactsInside2} key={key}>
                                    <b>{key}:</b> {buildField(key, 'contacts.' + key, [], Input)}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </label>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;