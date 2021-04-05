import React from 'react';
import * as s from './Profile.styles'
import UserPostsContainer from './UserPosts/UserPostsContainer';
import ProfileInfo from './ProfileInfo';

const Profile = React.memo(({profile, status, updateStatusThunk, isOwner, savePhoto, saveProfile}) => {

    return (
        <s.Profile>
            <s.ProfileInfo>
                <ProfileInfo isOwner={isOwner}
                             profile={profile}
                             status={status}
                             updateStatus={updateStatusThunk}
                             savePhoto={savePhoto}
                             saveProfile={saveProfile}
                />
            </s.ProfileInfo>
            <s.MyPosts>
                <UserPostsContainer/>
            </s.MyPosts>

        </s.Profile>
    )
})

export default Profile;