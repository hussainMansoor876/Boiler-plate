import React from 'react'
import { Form, Input, Button } from 'antd'
import { requiredMessage, inputPlace } from '../../utils/helpers'

const UpdatePassword = (props) => {

    const onFinish = (value) => {

    }

    return (
        <div className='card-parent'>
            <div className='card'>
                <p className='setting-heading'>Update Password</p>
                <Form
                    name='form'
                    onFinish={onFinish}
                    layout={'vertical'}
                    requiredMark={false}
                >
                    <Form.Item
                        name='newPassword'
                        label='New Password'
                        rules={[
                            {
                                required: true,
                                message: requiredMessage('New Password')
                            },
                            {
                                min: 8
                            }
                        ]}
                    >
                        <Input.Password
                            className='form-input'
                            placeholder={inputPlace('New Password')}
                        />
                    </Form.Item>
                    <Form.Item
                        name='confirm'
                        label='Confirm Password'
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: requiredMessage('confirm password'),
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('newPassword') === value) {
                                        return Promise.resolve()
                                    }
                                    return Promise.reject('The two passwords that you entered do not match!')
                                },
                            })
                        ]}
                    >
                        <Input.Password
                            placeholder={inputPlace('Confirm Password')}
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
                            Update Password
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default UpdatePassword