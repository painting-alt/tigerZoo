import React, { memo } from 'react'

// 样式相关
import Card from './style'

export default memo(() => {
    const colorList = ['#db3124', '#ff5132', '#ff8412']
    const data = [
        {
            title: '【笔记创作活动】已开启，超值礼品等你来拿 ',
        },
        {
            title: '笔记创作活动】已开启，超值礼品等你来',
        },
        {
            title: '【笔记创作活动】已开启，超值礼品等你',
        },
        {
            title: '【笔记创作活动】已开启，超值礼品等',
        },
        {
            title: '【笔记创作活动】已开启，超值礼',
        },
    ]
    return (
        <Card title='热门帖子' bodyStyle={{ padding: 0 }}>
            <div className='popular-content'>
                {data.map((item, index) => {
                    return (
                        <a
                            className='popular-item'
                            key={item.title}
                            href='/#'
                            target='_blank'
                        >
                            <span
                                className='popular-rank'
                                style={{ color: `${colorList[index]}` }}
                            >
                                {index + 1}
                            </span>
                            <span className='post-title'>{item.title}</span>
                        </a>
                    )
                })}
            </div>
        </Card>
    )
})
