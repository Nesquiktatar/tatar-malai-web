import React, {useEffect, useState} from 'react'
import * as s from './Profile.styles'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    //react do it after JSX return's (deps- зависимость, при изменении которой, срабатывает useEffect
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
         setStatus(e.currentTarget.value)
    }

    return (
                <>
            {! editMode &&
            <div>
                <b>Status:</b>
                    <span onDoubleClick={activateEditMode}>
                        {props.status || '-----------'}
                    </span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange}
                       value={status}
                />
            </div>

            }
                </>
    )
}


export default ProfileStatusWithHooks;