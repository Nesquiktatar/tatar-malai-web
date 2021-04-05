import React, {useState} from 'react';
import * as s from './Users.styles';
import Paginator from '../../common/Paginator/Paginator';
import User from './User';
import {buildField, Input} from '../../common/FormsControls/FormsControls';
import {required} from '../../../utils/validators/validators';
import {reduxForm} from 'redux-form';

const Users = React.memo(({
                              currentPage, onPageChanged, totalUsersCount, pageSize, usersData, followingInProgress,
                              unFollowThunk, followThunk, getFriendsThunkCreator, getUsersThunkCreator, getSearchUserThunk, ...props
                          }) => {

    const onSubmit = (formData) => {
        getSearchUserThunk(currentPage, pageSize, formData.term)
    }


    const [isFriendsList, setIsFriendsList] = useState(false);

    const onPageChangedALL = (currentPage, pageSize) => {

        getUsersThunkCreator(currentPage, pageSize);
        setIsFriendsList(true)
    }

    const onPageChangedFriends = (currentPage, pageSize) => {
        getFriendsThunkCreator(currentPage, pageSize);
        setIsFriendsList(false)
    }
    return (

        <s.Users>
            <button onClick={() => {
                onPageChangedALL(currentPage, pageSize)
            }}>
                ALL
            </button>
            <button onClick={() => {
                onPageChangedFriends(currentPage, pageSize)
            }}>
                FOLLOWED
            </button>
            <UserSearchFrom onSubmit={onSubmit}/>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize}
                       getFriendsThunkCreator={getFriendsThunkCreator}
                       getUsersThunkCreator={getUsersThunkCreator}
                       isFriendsList={isFriendsList}
            />
            {
                usersData.map(u => <User user={u} key={u.id} followingInProgress={followingInProgress}
                                         followThunk={followThunk} unFollowThunk={unFollowThunk}/>
                )
            }
        </s.Users>
    )
})

const SearchForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            {buildField('Enter user name', 'term', [required], Input)}
            <button>search</button>
        </form>
    )
}

const UserSearchFrom = reduxForm({form: 'term'})(SearchForm)

export default Users;