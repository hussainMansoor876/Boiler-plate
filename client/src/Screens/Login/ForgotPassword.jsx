import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Form, Input, Button } from 'antd'
import { requiredMessage, inputPlace } from '../../utils/helpers'

const ForgotPassword = (props) => {
    const dispatch = useDispatch()

    const onFinish = (value) => {

    }

    return (
        <div className='card-parent'>
            <div className='card'>
                <p className='heading head-center'>Reset Password</p>
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
                            placeholder={inputPlace('email')}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type='primary'
                            className='form-button'
                            block
                            htmlType='submit'
                        >
                            Get Code
                        </Button>
                        <br />
                        <br />
                        <p>Already have account? <Link to='/login'>Login</Link>
                        <br />
                        Don't have an account? <Link to='/register'>Sign up</Link></p>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default ForgotPassword