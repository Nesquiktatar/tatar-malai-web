import React from 'react';
import {connect} from 'react-redux';

import {
    getStatusThunk,
    getUserProfileThunk,
    savePhoto,
    saveProfile,
    setUserProfile,
    updateStatusThunk
} from '../../../dataredux/profile-reducer';

import {withRouter} from 'react-router';
import {compose} from 'redux';

import Profile from './Profile';
import {getFriendsThunkCreator} from '../../../dataredux/users-reducer';


class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }

        this.props.getUserProfileThunk(userId);
        this.props.getStatusThunk(userId);
    }

    componentDidMount() {
        this.refreshProfile();
        const {currentPage, pageSize} = this.props
        this.props.getFriendsThunkCreator(currentPage, pageSize, true);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }

    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatusThunk}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {
        getUserProfileThunk,
        setUserProfile,
        getStatusThunk,
        updateStatusThunk,
        savePhoto,
        saveProfile,
        getFriendsThunkCreator
    }),
    withRouter,
)(ProfileContainer)
