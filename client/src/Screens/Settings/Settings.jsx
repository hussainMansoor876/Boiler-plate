import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ChangePassword, UserSettings } from '../../Components'

const Settings = (props) => {
    const user = useSelector(state => state.authReducer.user)
    const dispatch = useDispatch()
    const [state, updateState] = useState({
    })
    // const dispatch = useDispatch()

    // const reduxActions = {
    //     loginUser: (u) => dispatch(loginUser(u)),
    //     updateRoute: (selectedKey) => dispatch(updateRoute(selectedKey)),
    //     removeUser: () => dispatch(removeUser()),
    //     setArtifactData: (artifact) => dispatch(setArtifactData(artifact)),
    // }

    const onFinish = (value) => {

    }

    return (
        <div className='card-parent'>
            <div className='card'>
                <UserSettings {...props} />
                <div className='break-line'></div>
                <ChangePassword {...props} />
            </div>
        </div>
    )
}

export default Settings