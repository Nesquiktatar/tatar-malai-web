import React from 'react';
import * as s from './MainView.styles';
import Routes from '../../Routes'

const MainView = (props) => {
    return(
        <s.MainViewContainer>
            <Routes/>
        </s.MainViewContainer>
    )
}

export default MainView;