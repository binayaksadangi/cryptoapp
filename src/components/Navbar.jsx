import React from 'react'
import {Button,Typography,Avatar,Menu} from 'antd'
import { Link } from 'react-router-dom'
import icon from '../Images/cryptocurrency.png'

import { HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined } from '@ant-design/icons'
const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className="logo-container">
                <Avatar src={icon} size='large'/>
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>Cryptoverse</Link>
                </Typography.Title>
            </div>
            <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined/>}> 
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item icon={<HomeOutlined/>}> 
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item icon={<HomeOutlined/>}> 
                    <Link to='/'>Home</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar
