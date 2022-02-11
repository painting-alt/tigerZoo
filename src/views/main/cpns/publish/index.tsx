import React, { memo } from 'react'
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

import { Button } from 'antd';

//引入自己的组件
import AppHeader from '@/components/app-header';

export default memo(function Publish() {
const mdParser = new MarkdownIt(/* Markdown-it options */);

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
       >
        发布
      </Button>
      </AppHeader>
      <MdEditor
        style={{ height: '500px' }}
        renderHTML={text => mdParser.render(text)}
      />
    </div>
  )
}
)