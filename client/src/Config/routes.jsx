import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path={allPaths.LOGIN} exact component={Login} />
                <Route path={allPaths.SIGNUP} exact component={Signup} />
                <Route path={allPaths.FORGOT} exact component={ForgotPassword} />
                <Route path={allPaths.UPDATE_PASSWORD} exact component={UpdatePassword} />
                <MenuLayout path={allPaths.HOME} exact component={Home} />
                <MenuLayout path={allPaths.SETTINGS} exact component={Settings} />
                <Route path='/:page404' exact component={Page404} />
            </Switch>
        </Router>
    )
}

export default Routes