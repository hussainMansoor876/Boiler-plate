import React from 'react'
import { SideMenu } from '../'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'


const MenuLayout = ({ component: Component, ...rest }) => {
    const user = useSelector(state => state.authReducer.user)

    // if (!user) {
    //     return (
    //         <Redirect to='/login' />
    //     )
    // }

    return (
        <Route
            {...rest}
            render={props => <AddMenu {...props} component={Component} />}
        />
    )
}

const AddMenu = ({ component: Component, ...props }) => {
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

export { MenuLayout, AddMenu }