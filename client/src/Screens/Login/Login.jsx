import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Form, Input, Button } from 'antd'
import { requiredMessage, inputPlace } from '../../utils/helpers'

const Login = (props) => {
    const dispatch = useDispatch()

    const onFinish = (value) => {

    }

    return (
        <div className='card-parent'>
            <div className='card'>
                <p className='heading head-center'>Login</p>
                <Form
                    name='form'
                    onFinish={onFinish}
                    layout={'vertical'}
                    requiredMark={false}
                >
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
                            placeholder={inputPlace('Email')}
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
                            placeholder={inputPlace('Password')}
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
                        <p>Don't have an account? <Link to='/register'>Sign up</Link>
                            <br />
                            <Link to='/forgot'>Forgot Password</Link>
                        </p>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login