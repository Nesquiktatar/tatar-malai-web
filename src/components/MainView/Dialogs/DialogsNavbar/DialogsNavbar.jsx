import React, {useState} from 'react';
import DialogsNavEl from "./DialogsNavEl";
import * as s from '../Dialogs.styles'

const DialogsNavbar = (props) => {

    const [selected, setSelected] = useState(props.data[0] ? props.data[0].id : null)

    const changeDialog = id =>  {
            setSelected(id)
    }
    let DialogsNavElDataElements = props.data.map(d => <DialogsNavEl selected={selected} changeDialog={changeDialog} name={d.name} id={d.id}/>)

    return (
        <s.DialogsNavbar>
            {DialogsNavElDataElements}
        </s.DialogsNavbar>
    )
}

export default DialogsNavbar;