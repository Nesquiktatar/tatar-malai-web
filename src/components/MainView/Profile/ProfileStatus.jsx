import React from 'react'
import * as s from './Profile.styles'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode : true
        })
    }

    deactivateEditMode =  () => {
        this.setState({
            editMode : false
        });
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {

        return ( <s.ProfileStatus>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>
                        {this.props.status || '-----------'}
                    </span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange}
                        autoFocus={true} value={this.state.status} onBlur={this.deactivateEditMode}/>
                </div>
                }
            </s.ProfileStatus>
        )
    }
}

export default ProfileStatus;