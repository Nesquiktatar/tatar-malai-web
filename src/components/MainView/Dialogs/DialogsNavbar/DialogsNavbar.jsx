import React from 'react';
import DialogsNavEl from "./DialogsNavEl";
import * as s from '../Dialogs.styles'

const DialogsNavbar = (props) => {

    let DialogsNavElDataElements = props.data.map(d => <DialogsNavEl name={d.name} id={d.id}/>)

    return (
        <s.DialogsNavbar>
            {DialogsNavElDataElements}
        </s.DialogsNavbar>
    )
}

export default DialogsNavbar;