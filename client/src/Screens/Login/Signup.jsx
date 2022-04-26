import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Form, Input, Button } from 'antd'
import { GoogleLogin } from 'react-google-login'
import { GoogleLoginButton } from 'react-social-login-buttons'
import { requiredMessage, inputPlace } from '../../utils/helpers'
import { googleClientId } from '../../utils/constants'

const Signup = (props) => {
    const dispatch = useDispatch()

    const onFinish = (value) => {

    }

    return (
        <div className='card-parent'>
            <div className='card'>
                <p className='heading head-center'>Register And Transfer Money</p>
                <Form
                    name='form'
                    onFinish={onFinish}
                    layout={'vertical'}
                    requiredMark={false}
                >
                    <Form.Item
                        name='fullName'
                        label='Full Name'
                        rules={[
                            {
                                required: true,
                                message: requiredMessage('Full Name')
                            }
                        ]}
                    >
                        <Input
                            className='form-input'
                            placeholder={inputPlace('full name')}
                        />
                    </Form.Item>
                    <Form.Item
                        name='email'
                        label='Email'
                        rules={[
                            {
                                required: true,
                                message: requiredMessage('Email')
                            }
                        ]}
                    >
                        <Input
                            className='form-input'
                            placeholder={inputPlace('email')}
                        />
                    </Form.Item>
                    <Form.Item
                        name='password'
                        label='Password'
                        rules={[
                            {
                                required: true,
                                message: requiredMessage('Password')
                            },
                            {
                                min: 8
                            }
                        ]}
                    >
                        <Input.Password
                            className='form-input'
                            placeholder={inputPlace('password')}
                        />
                    </Form.Item>
                    <Form.Item
                        label='Confirm Password'
                        name='confirm'
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: requiredMessage('confirm password'),
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve()
                                    }

                                    return Promise.reject('The two passwords that you entered do not match!')
                                },
                            })
                        ]}
                    >
                        <Input.Password
                            placeholder={inputPlace('confirm password')}
                            className='form-input'
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type='primary'
                            className='form-button'
                            block
                            htmlType='submit'
                        >
                            Submit
                        </Button>
                        <GoogleLogin
                            clientId={googleClientId}
                            render={renderProps => <GoogleLoginButton
                                onClick={renderProps.onClick}
                                className='google-login'
                            />}
                            onSuccess={(e) => console.log(e)}
                            onFailure={(e) => console.log('e', e)}
                            style={{ display: 'inline' }}
                            cookiePolicy={'single_host_origin'}
                        />
                        <p>Already have account? <Link to='/login'>Login</Link>
                            <br />
                            <Link to='/forgot'>Forgot Password</Link>
                        </p>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Signup