import React from 'react';
import {connect} from 'react-redux';

import {
    followThunk,
    followUser, getFriendsThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow,
    unFollowThunk,
    getSearchUserThunk
} from '../../../dataredux/users-reducer';

import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersData
} from '../../../dataredux/users-selectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        //this.props.getUsersThunkCreator(currentPage,pageSize);
        this.props.getFriendsThunkCreator(currentPage, pageSize)
    }

    /*onPageChanged = (currentPage) => {
        const {pageSize} = this.props;
        this.props.getUsersThunkCreator(currentPage, pageSize);
    }

    onPageChangedFriends = (currentPage) => {
        const {pageSize} = this.props;
        this.props.getUsersThunkCreator(currentPage, pageSize);
    }*/

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   onPageChangedFriends={this.onPageChangedFriends}
                   usersData={this.props.usersData}
                   followUser={this.props.followUser}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   followThunk={this.props.followThunk}
                   unFollowThunk={this.props.unFollowThunk}
                   getFriendsThunkCreator={this.props.getFriendsThunkCreator}
                   getUsersThunkCreator={this.props.getUsersThunkCreator}
                   getSearchUserThunk={this.props.getSearchUserThunk}
            />
        </>
    }

}

const mapStateToProps = (state) => {
    return {
        usersData: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose(
    connect(mapStateToProps, {
        followUser,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsersThunkCreator,
        followThunk,
        unFollowThunk,
        getFriendsThunkCreator,
        getSearchUserThunk
    }),
)(UsersContainer);