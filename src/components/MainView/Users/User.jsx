import React from 'react';
import * as s from './Users.styles';
import userPhoto from '../../../assets/images/user.svg';
import {NavLink} from 'react-router-dom';

const User = ({user, followingInProgress, followThunk, unFollowThunk }) => {
            return ( <s.User>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}/>
                            </NavLink>
                            </div>
                        <div>
                            {user.followed

                                ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    unFollowThunk(user.id)
                                }}>UnFollow</button>

                                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    followThunk(user.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </span>
                    </span>
        </s.User>
            )
}

export default User;