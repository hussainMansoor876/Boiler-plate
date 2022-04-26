import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login, Signup, Home, Settings, ForgotPassword, UpdatePassword } from '../Screens'
import { MenuLayout } from '../Components'
import allPaths from './paths'
import { Result, Button } from 'antd'

const Page404 = (props) => {
    const { history } = props
    return (
        <Result
            status='404'
            title='404'
            subTitle='Sorry, the page you visited does not exist.'
            extra={<Button
                type='primary'
                className='form-button'
                onClick={() => history.push('/')}
            >Back Home</Button>}
        />
    )
}

const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path={allPaths.LOGIN} exact element={<Login />} />
                <Route path={allPaths.SIGNUP} exact element={<Signup />} />
                <Route path={allPaths.SIGNUP} exact element={<Signup />} />
                <Route path={allPaths.HOME} exact element={<MenuLayout component={Home} />} />
                <Route path='/:page404' exact element={Page404} />
            </Routes>
        </Router>
    )
}

export default AllRoutes