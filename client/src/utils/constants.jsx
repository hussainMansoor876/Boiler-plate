import { HomeOutlined, SettingOutlined, DollarOutlined, QuestionOutlined } from '@ant-design/icons'
import allPaths from '../Config/paths'

const bgColor = '#0adc00'
const googleClientId = '470054906346-g3ei7alaugil9mp8skp922auljmv9p1m.apps.googleusercontent.com'

const drawerRoutes = [
    {
        title: 'Home',
        route: allPaths.HOME,
        icon: <HomeOutlined />
    },
    {
        title: 'Settings',
        route: allPaths.SETTINGS,
        icon: <SettingOutlined />
    },
    {
        title: 'Transfer',
        route: allPaths.TRANSFER,
        icon: <DollarOutlined />
    },
    {
        title: 'Help',
        route: allPaths.HELP,
        icon: <QuestionOutlined />
    }
]

export {
    bgColor,
    drawerRoutes,
    googleClientId
}