import React from 'react';
import * as s from './Login.styles';
import {reduxForm} from 'redux-form';
import {buildField, Input} from '../../common/FormsControls/FormsControls';
import {required} from '../../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../../../dataredux/auth-reducer';
import {Redirect} from 'react-router';

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <s.Login>
            <form onSubmit={handleSubmit}>
                {buildField('Email', 'email', [required], Input)}
                {buildField('Password', 'password', [required], Input, {type: 'password'})}
                {buildField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}

                {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
                {captchaUrl && buildField('Enter symbols from image', 'captcha', [required], Input)}
                {error && <s.FormSummaryError>
                    {error}
                </s.FormSummaryError>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </s.Login>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <>
            <div>Login</div>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {
    login
})(Login);