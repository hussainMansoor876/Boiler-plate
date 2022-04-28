import { message, notification } from 'antd'
import allPaths from '../Config/paths'

const requiredMessage = (value) => `Please input your ${value}!`

const inputPlace = (value) => `Input your ${value} Here...!`

const setActiveMenu = (path) => path === allPaths.HOME ? 0 : 1

const successMessage = (desc = 'Successfully Complete!') => {
    return message.success(desc)
}

const infoMessage = (desc = 'Successfully Complete!') => {
    return message.info(desc)
}

const errorMessage = (desc = 'Oops Something Went Wrong!') => {
    return message.error(desc)
}

const warningMessage = (desc = 'Warning!') => {
    return message.warning(desc)
}

const successNotification = (message = 'Successfully Complete!') => {
    return notification.success({ message })
}

const errorNotification = (message = 'Oops Something Went Wrong!') => {
    return notification.error({ message })
}

const convertTitle = (val) => val.charAt(0).toUpperCase() + val.slice(1)

const stringLimiter = (val, limit = 50) => val?.length > limit ? `${val.slice(0, limit)}...` : val

export {
    requiredMessage,
    inputPlace,
    setActiveMenu,
    successMessage,
    infoMessage,
    errorMessage,
    warningMessage,
    successNotification,
    errorNotification,
    convertTitle,
    stringLimiter
}