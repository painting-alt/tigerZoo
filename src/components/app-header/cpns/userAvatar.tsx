import React from 'react'

import { Avatar, Menu, Dropdown, } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export default function UserAvatar() {
  const menu = (
    <Menu>
      <Menu.Item key="0">       
        <span>
          我的发帖
        </span>  
      </Menu.Item>
      <Menu.Item key="1">
        <span>
          我的主页
        </span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menu}>    
      <Avatar
          className='point avatar'
          size={32}
          icon={<UserOutlined />}
      />
      </Dropdown>
    </div>
  )
}
