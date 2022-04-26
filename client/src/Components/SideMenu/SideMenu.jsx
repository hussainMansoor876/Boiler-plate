import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { setActiveMenu } from '../../utils/helpers'
import { drawerRoutes } from '../../utils/constants'

const SideMenu = (props) => {
    const { location } = props


    return (
        <Menu
            defaultOpenKeys={[`${setActiveMenu(location?.pathname)}`]}
            defaultSelectedKeys={[`${setActiveMenu(location?.pathname)}`]}
            style={{ height: '100vh', maxWidth: 180 }}
            mode='inline'
            theme='dark'
        >
            {drawerRoutes.map((v, i) => {
                return (
                    <Menu.Item
                        key={i}
                        icon={v.icon}
                    >
                        <Link
                            to={v?.route}
                        >
                            {v.title}
                        </Link>
                    </Menu.Item>
                )
            })}
        </Menu>
    )
}

export default SideMenu