import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Input, Button } from 'antd'
import { requiredMessage, inputPlace } from '../../utils/helpers'

const UserSettings = (props) => {
    const user = useSelector(state => state.authReducer.user)
    const dispatch = useDispatch()
    const [state, updateState] = useState({
    })

    const onFinish = (value) => {

    }

    return (
        <div>
            <p className='setting-heading'>User Settings</p>
            <Form
                name='form'
                onFinish={onFinish}
                layout={'vertical'}
                requiredMark={false}
            >
                <Form.Item
                    name='email'
                    label='Email'
                    initialValue='abc@gmail.com'
                >
                    <Input
                        className='form-input'
                        placeholder={inputPlace('Email')}
                        disabled
                    />
                </Form.Item>
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
                        placeholder={inputPlace('Full Name')}
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        type='primary'
                        className='form-button'
                        block
                        htmlType='submit'
                    >
                        Update Settings
                        </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UserSettings