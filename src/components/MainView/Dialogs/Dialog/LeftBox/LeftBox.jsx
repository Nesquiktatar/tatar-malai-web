import React from 'react';
import s from './LeftBox.module.css';

const LeftBox = (props) => {
    return(
        <div className={s.container}>
            <div className={s.arrow}>
                <div className={s.outer}></div>
                <div className={s.inner}></div>
            </div>
            <div className={s.messageBody}>
                <p>{props.message}</p>
            </div>
        </div>

    )
}

export default LeftBox;