import React, { memo } from 'react'

// 样式相关
import Card from './styled'

export default memo(() => {
    const data = [
        {
            title: '【笔记创作活动】已开启，超值礼品等你来拿 ',
            time: '2022/01/10',
        },
        {
            title: '笔记创作活动】已开启，超值礼品等你来',
            time: '2022/01/10',
        },
        {
            title: '【笔记创作活动】已开启，超值礼品等你',
            time: '2022/01/10',
        },
        {
            title: '【笔记创作活动】已开启，超值礼品等',
            time: '2022/01/10',
        },
    ]

    return (
        <Card
            title='公告栏'
            extra={<a href='/#'>更多</a>}
            bodyStyle={{ padding: 0 }}
        >
            <div className='announcenment-content'>
                {data.map(item => {
                    return (
                        <div className='announcenment-item' key={item.title}>
                            <a className='post-title' href='/#' target='_blank'>
                                {item.title}
                            </a>
                            <span className='post-time'>{item.time}</span>
                        </div>
                    )
                })}
            </div>
        </Card>
    )
})
