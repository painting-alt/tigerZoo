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
    // 发布对话框相关逻辑
    const [visible, setVisible] = React.useState(false)
    const showModal = () => {
        setVisible(true)
    }
  const mdParser = new MarkdownIt(/* Markdown-it options */);
  console.log(mdParser);
  // 将文章内容保存到redux
  return (
    <div>
      <AppHeader>
      <Button
          className='point'
          type='primary'
          style={{
            width: 90,
            borderRadius: 4,
            backgroundColor: '#4080ff',
          }}
          onClick={showModal}
       >
        发布
        </Button>
        <PublishModal visible={visible} setVisible={setVisible} />
      </AppHeader>
      <MdEditor
        style={{ height: '500px' }}
        renderHTML={text => mdParser.render(text)}
        onChange={({text, html}, event) => {console.log(text);
        }}
      />
    </div>
  )
}
)
