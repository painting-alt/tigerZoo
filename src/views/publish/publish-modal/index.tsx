import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// 样式相关
import { Modal, Button, Space, Input } from 'antd'

// action
import {
    changeTitleAction,
    changeTagAction,
} from '@/store/article/actionCreators'

// 网络请求
import { publishData } from '@/network/publish'

// Publish 组件参数类型
interface publishProps {
    visible: boolean
    setVisible: (values: boolean) => void
}



const Publish: React.FC<publishProps> = memo(props => {
    const { visible, setVisible } = props

    const [confirmLoading, setConfirmLoading] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('')
    const [istag, setIsTag] = useState<boolean>(true)
    const [isPublish, setIsPublish] = useState<boolean>(true)

    const dispatch = useDispatch()

    const navigation = useNavigate()

    const articleTitle = useSelector((state: any) => state.title)
    const article = useSelector((state: any) => state.article)
    const articleTag = useSelector((state: any) => state.tag)

    let timer:any = null;
    const handleOk = async () => {
        setConfirmLoading(true) 
        // setVisible(false)
        timer = setTimeout(() => {
            setVisible(false)
            setConfirmLoading(false)
        }, 2000)
        // 发送网络请求，将store中的title、article、tag发送到后台
        console.log(articleTitle, article, articleTag);
           const res:any =  await publishData({
                title: articleTitle,
                content: article,
                tag: articleTag
           })
        console.log(res)
        const id = res._id
        navigation('/preview/'+id)
        
    }
    useEffect(() => { 
        return () => { 
            clearTimeout(timer)
        }
    })

    const handleCancel = () => {
        setVisible(false)
    }

    const changeTitle = (el: any) => {
        // console.log(el.target.value)
        setTitle(el.target.value)
    }

    const changeTitleOk = () => {
        dispatch(changeTitleAction(title))
        setIsTag(false)
    }

    const changeTag = (value: any) => {
        // console.log(value)
        dispatch(changeTagAction(value))
        setIsPublish(false)
    }

    return (
        <Modal
            title='发布板块'
            visible={visible}
            okText='发布文章'
            okButtonProps={{ disabled: isPublish }}
            cancelText='取消发布'
            onOk={() => handleOk()}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
        >
            文章标题：
            <Input
                size='large'
                placeholder='请输入标题'
                onChange={changeTitle}
                onBlur={changeTitleOk}
                style={{ width: '80%', marginBottom: '20px' }}
            />
            <Space>
                <Button disabled={istag} onClick={() => changeTag('综合讨论')}>
                    综合讨论
                </Button>
                <Button disabled={istag} onClick={() => changeTag('技术问答')}>
                    技术问答
                </Button>
                <Button disabled={istag} onClick={() => changeTag('笔记分享')}>
                    笔记分享
                </Button>
            </Space>
        </Modal>
    )
})

export default Publish
