import React from 'react';
import * as s from './FriendsList.styles';
import userPhoto from '../../../assets/images/user.svg';
import FriendsContainer from '../../common/Friends/FriendsContainer';

const FriendsList = () => {
        return (<>
            <s.FriendsList>
                <FriendsContainer/>
            </s.FriendsList>
            </>
        )
    }

export default FriendsList;