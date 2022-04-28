import HomeOutlined from '@ant-design/icons/HomeOutlined'
import allPaths from '../Config/paths'

const bgColor = '#0adc00'

const drawerRoutes = [
    {
        title: 'Home',
        route: allPaths.HOME,
        icon: <HomeOutlined />
    }
]

export {
    bgColor,
    drawerRoutes,
    allPaths,
}

