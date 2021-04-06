import React from 'react';
import * as s from '../Dialogs.styles'
import userPhoto from '../../../../assets/images/user.svg';
import {NavLink} from "react-router-dom";

const DialogsNavEl = (props) => {
    return (
        <s.DialogsNavEl selected={props.selected} id={props.id} onClick={() => {props.changeDialog(props.id)}}>
            <NavLink to={'/dialogs/' + props.id}>
                <div>
                    <img src={userPhoto} alt="userPhoto"/>
                    {props.name}
                </div>
            </NavLink>
        </s.DialogsNavEl>
    )
}
export default DialogsNavEl;
