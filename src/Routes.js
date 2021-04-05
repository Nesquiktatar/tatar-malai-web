import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {withSuspense} from './hoc/withSuspense';

//Components
import DialogsContainer from './components/MainView/Dialogs/DialogsContainer';
import ProfileContainer from './components/MainView/Profile/ProfileContainer';

const Login = React.lazy(() => import('./components/MainView/Login/Login'));
const UsersContainer = React.lazy(() => import('./components/MainView/Users/UsersContainer'));

const Routes = (props) => {

    return (
        <Switch>
            <Route  path='/profile/:userId?' render={() => <ProfileContainer/>}/>
            <Route  exact path='/' render={() => <Redirect to={'profile'}/>}/>
            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
            <Route path='/users' render={withSuspense(UsersContainer)}/>
            <Route path='/login' render={withSuspense(Login)}/>
            <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
            {/*<Route exact path='/destinations' component={Destinations}/>
            <Route exact path='/destinations/:country' component={Country}/>
            <Route exact path='/blog' component={Blog}/>
            <Route exact path='/services' component={Services}/>
            <Route exact path='/contacts' component={Contacts}/>*/}
        </Switch>
    )
}

export default Routes;