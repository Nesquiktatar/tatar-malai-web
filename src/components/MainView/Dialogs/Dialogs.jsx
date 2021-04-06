import React from 'react';
import * as s from './Dialogs.styles'
import DialogsNavbar from './DialogsNavbar/DialogsNavbar';
import LeftBox from './Dialog/LeftBox/LeftBox';
import RightBox from './Dialog/RightBox/RightBox';
import {Redirect} from 'react-router-dom';
import {reduxForm} from 'redux-form';
import {buildField, Input} from '../../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import Button from "../../common/Button/Button";

const maxLength50 = maxLengthCreator(50);

const MessageInputForm = (props) => {

    return (
        <s.messageInputForm>
            <form onSubmit={props.handleSubmit}>
                {buildField('Your message', 'MsgBody', [required, maxLength50], Input)}
                <div>
                    <Button btnText='SEND'/>
                </div>

            </form>
        </s.messageInputForm>
    )
}

const MessageInputReduxForm = reduxForm({form: 'dialogsAddMsgForm'})(MessageInputForm)

const Dialogs = React.memo(({sendMessage, dialogsPage, isAuth,}) => {

    let MessagesDataElementsLeft = dialogsPage.messagesDataIncoming.map(m => <LeftBox message={m.message} key={m.id}/>)
    let MessagesDataElementsRight = dialogsPage.messagesDataOutgoing.map(m => <RightBox message={m.message} key={m.id}/>)
    let addNewMessage = (values) => {
        sendMessage(values.MsgBody);
    }
    if (!isAuth) return <Redirect to={'/login'}/>

    return (
        <s.Dialogs>
            <DialogsNavbar data={dialogsPage.dialogsNavElData}/>
            <s.DialogsElements>
                {MessagesDataElementsLeft}
                {MessagesDataElementsRight}
            </s.DialogsElements>
            <s.MessageInputReduxForm><MessageInputReduxForm onSubmit={addNewMessage}/></s.MessageInputReduxForm>
        </s.Dialogs>
    )
})


export default Dialogs;