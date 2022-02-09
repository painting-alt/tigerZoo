import React, { memo } from 'react'

// 样式相关
import { Divider, Space } from 'antd'
import CommunityCard from './styled'

// assets
import logo from '@/assets/img/logo.png'

export default memo(function HQCommunityCard() {
    return (
        <CommunityCard>
            <div className='card-header'>
                <Space>
                    <img
                        className='logo'
                        src={logo}
                        alt='this app`s logo that consist of three tiger dolls.'
                    />
                    <span className='community-name'>虎园社区</span>
                </Space>
                <Space direction='vertical' style={{ marginTop: 7 }}>
                    <p className='introduction'>
                        一个专属于大学生的技术交流平台，助力学生个人成长与进步。
                    </p>
                    <p className='introduction'>
                        在这里，不仅可以畅谈学习心得，也欢迎讨论最顶尖、最前沿的技术，关注互联网的发展。
                    </p>
                </Space>
            </div>
            <div className='card-content'>
                <Space align='center'>
                    <div className='post'>
                        <div className='post-name'>主题帖</div>
                        <div className='post-number'>1487</div>
                    </div>
                </Space>
                <Space>
                    <Divider type='vertical' className='divider' />
                </Space>
                <Space align='center'>
                    <div className='post'>
                        <div className='post-name'>回帖数</div>
                        <div className='post-number'>2760</div>
                    </div>
                </Space>
            </div>
        </CommunityCard>
    )
})
