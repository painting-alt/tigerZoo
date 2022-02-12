// 第三方组件
import React, { memo,useState } from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import { useDispatch } from 'react-redux'

//引入自己的组件
import AppHeader from '@/components/app-header'
import PublishModal from '../publish-modal'

// 样式相关
import 'react-markdown-editor-lite/lib/index.css'
import { Button } from 'antd'

// 引入actions
import { 
  changeArticleAction
} from '@/store/actionCreators'

export default memo(function Public() {
  const mdParser = new MarkdownIt(/* Markdown-it options */);

  const [text, changeText] = useState('')
  
  const dispatch = useDispatch()

    // 发布对话框相关逻辑
  const [visible, setVisible] = React.useState(false)
  
    const showModal = (text:any) => {
      setVisible(true)
      // console.log(text);
      dispatch(changeArticleAction(text))    
  }
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
          onClick={()=>showModal(text)}
       >
        发布
        </Button>
        <PublishModal visible={visible} setVisible={setVisible} />
      </AppHeader>
      <MdEditor
        style={{ height: '500px' }}
        renderHTML={text => mdParser.render(text)}
        onChange={({ text, html }, event) => {
          changeText(text)
        }}
      />
    </div>
  )
}
)