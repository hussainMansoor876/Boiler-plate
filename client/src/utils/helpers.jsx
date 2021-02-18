import allPaths from '../Config/paths'

const requiredMessage = (value) => `Please input your ${value}!`

const inputPlace = (value) => `Input your ${value} Here...!`

const setActiveMenu = (path) => path === allPaths.HOME ? '0' : path === allPaths.SETTINGS ? 1 : path === allPaths.TRANSFER ? 2 : 3

export {
    requiredMessage,
    inputPlace,
    setActiveMenu
}