import React from 'react';
import * as s from '../Dialogs.styles'
import userPhoto from '../../../../assets/images/user.svg';
import {NavLink} from "react-router-dom";

const DialogsNavEl = (props) => {
    return (
        <s.DialogsNavEl>
            <img src={userPhoto} alt="userPhoto"/>
            <s.DialogsNavElName>
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </s.DialogsNavElName>
        </s.DialogsNavEl>
    )
}

export default DialogsNavEl;