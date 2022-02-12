import React, { memo, useState } from 'react'
import {useDispatch,useSelector } from 'react-redux'

// 样式相关
import { Modal, Button, Space, Input } from 'antd'

// action
import { changeTitleAction, changeTagAction } from '@/store/actionCreators'

//网络请求
import {publishData } from '@/network/publish'

// 参数类型
interface publishProps {
    visible: boolean
    setVisible: Function
}

const publish: React.FC<publishProps> = memo(props => {
    const [confirmLoading, setConfirmLoading] = React.useState(false)

    const { visible, setVisible } = props

    const dispatch = useDispatch()

    let [title, setTitle] = useState('')
    const articleTitle = useSelector((state: any) => state.title)
    const article = useSelector((state: any) => state.article)
    const articleTag = useSelector((state:any) => state.tag)

    // 点击发布文章按钮
    const handleOk = () => {
        setConfirmLoading(true)
        // console.log(title);       
        setTimeout(() => {
            setVisible(false)
            setConfirmLoading(false)
        }, 2000)
         // 发送网络请求，将store中的title、article、tag发送到后台
        console.log(articleTitle, article, articleTag);
        publishData({
            title: articleTitle,
            content: article,
            tag:articleTag
        }).then(res => { 
            console.log(res)
        })
    }

    const handleCancel = () => {
        // console.log('Clicked cancel button')
        setVisible(false)
    }

    const changeTitle = (el:any) => { 
        // console.log(el.target.value)
        setTitle(el.target.value)
    }

    const changeTitleOk = () => { 
        dispatch(changeTitleAction(title))
    }

    const changeTag = (value:any) => { 
        // console.log(value)
        dispatch(changeTagAction(value))
    }
    return (
        <Modal
            title='发布板块'
            visible={visible}
            okText='发布文章'
            cancelText='取消发布'
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
        >
            文章标题：<Input size='large'
                placeholder='请输入标题'
                onChange={changeTitle}
                onBlur={changeTitleOk}
                style={{ width: "80%", marginBottom: "20px" }} />
            <Space>
                <Button onClick={()=>changeTag("综合讨论")}>综合讨论</Button>
                <Button onClick={()=>changeTag("技术问答")}>技术问答</Button>
                <Button onClick={()=>changeTag("笔记分享")}>笔记分享</Button>
            </Space>
        </Modal>
    )
})

export default publish
