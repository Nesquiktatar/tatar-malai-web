import React from 'react';
import s from './Button.module.css'

const Button = ({btnText}) => {
    return(
        <>
            <button className={s.bigButton} >{btnText}</button>

        </>
    )
}

export default Button;