import React, { memo } from 'react'

// assets
import logo from '@/assets/img/logo.png'

// 样式相关
import { Space, Image, Divider } from 'antd'
import Card from './styled'

const Logo = memo(() => {
    return (
        <Space direction='vertical'>
            <Space>
                <Image
                    src={logo}
                    alt='this app`s logo that consist of three tiger dolls.'
                    height='32px'
                    preview={false}
                />
                <span className='community-name'>虎园社区</span>
            </Space>
            <p className='community-introduction'>
                一个专属于大学生的技术交流平台，助力学生个人成长与进步。
            </p>
            <p className='community-introduction'>
                在这里，不仅可以畅谈学习心得，也欢迎讨论最顶尖、最前沿的技术，关注互联网的发展。
            </p>
        </Space>
    )
})

export default memo(() => {
    return (
        <Card className='community' title={<Logo />}>
            <Space
                align='center'
                size='large'
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                }}
            >
                <div>
                    <div className='count-title'>主题帖</div>
                    <div className='count-data'> 1487</div>
                </div>
                <Divider className='divider' type='vertical' />
                <div>
                    <div className='count-title'>回帖数</div>
                    <div className='count-data'>2760</div>
                </div>
            </Space>
        </Card>
    )
})
