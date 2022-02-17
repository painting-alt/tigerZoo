import React, { memo } from 'react'

import { MessageOutlined } from '@ant-design/icons'

// 样式
import mainlist from '@/assets/css/css_modules/mainlist.module.css'

interface mainlistProps {
    title?: any
    view?: any
    like?: any
}

export default memo(function MainList(props: mainlistProps) {
    const { title, view, like } = props
    return (
        <div className={mainlist.mainlist}>
            <div
                style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    marginLeft: '20px',
                }}
            >
                {title}
            </div>
            <div className={mainlist.popular}>
                <span className={mainlist.span}>{view}</span>
                <span className={mainlist.span}>{like}</span>
                <span className={mainlist.span}>
                    <MessageOutlined />
                    15
                </span>
            </div>
            <hr
                style={{
                    width: '95%',
                    position: 'absolute',
                    bottom: '0px',
                    left: '20px',
                }}
            />
        </div>
    )
})
