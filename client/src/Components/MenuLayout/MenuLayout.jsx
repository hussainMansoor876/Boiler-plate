import React from 'react'
import { SideMenu } from '../'
import { useSelector } from 'react-redux'

const MenuLayout = ({ component: Component, ...props }) => {
    const user = useSelector(state => state.authReducer.user)

    // if (!user) {
    //     return (
    //         <Redirect to='/login' />
    //     )
    // }

    return (
        <div className='helper-main'>
            {/* <Header {...props} /> */}
            <div className='menu-flex'>
                <SideMenu {...props} />
                <div className='helper-comp'>
                    <Component {...props} />
                </div>
            </div>
        </div>
    )
}

export { MenuLayout }