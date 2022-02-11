// 第三方组件
import React, { memo } from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'

//引入自己的组件
import AppHeader from '@/components/app-header'
import PublishModal from '../publish-modal'

// 样式相关
import 'react-markdown-editor-lite/lib/index.css'
import { Button } from 'antd'

export default memo(function Publish() {
    const mdParser = new MarkdownIt(/* Markdown-it options */)

    // 发布对话框相关逻辑
    const [visible, setVisible] = React.useState(false)
    const showModal = () => {
        setVisible(true)
    }

    return (
        <div>
            <AppHeader>
                <Button
                    className='point'
                    type='primary'
                    onClick={showModal}
                    style={{
                        width: 90,
                        borderRadius: 4,
                        backgroundColor: '#4080ff',
                    }}
                >
                    发布
                </Button>
                <PublishModal visible={visible} setVisible={setVisible} />
            </AppHeader>
            <MdEditor
                style={{ height: '650px' }}
                renderHTML={text => mdParser.render(text)}
            />
        </div>
    )
})
