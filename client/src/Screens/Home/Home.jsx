import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Input, Button } from 'antd'
import { requiredMessage, inputPlace } from '../../utils/helpers'

const Home = (props) => {
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
        <div className='home-main'>
            Hello
        </div>
    )
}

export default Home