import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// 样式相关
import { Modal, Button, Space, Input } from 'antd'

// action
import { changeTitleAction, changeTagAction } from '@/store/actionCreators'

// 网络请求
import { publishData } from '@/network/publish'

// Publish 组件参数类型
interface publishProps {
    visible: boolean
    setVisible: Function
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

    // const handleOk =  async () => {
    //     setConfirmLoading(true)
    //     // console.log(title);
    //     setTimeout(() => {
    //         setVisible(false)
    //         setConfirmLoading(false)
    //     }, 2000)
    //     // 发送网络请求，将store中的title、article、tag发送到后台
    //     console.log(articleTitle, article, articleTag);
    //        //在没有卸载之前发送网络请求
    //         await publishData({
    //             title: articleTitle,
    //             content: article,
    //             tag: articleTag
    //         })
    //         navigation('/show')
    // }

    let handleOk: any
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        // eslint-disable-next-line react-hooks/exhaustive-deps
        handleOk = async () => {
            setConfirmLoading(true)

            /*  
        在没有卸载之前发送网络请求
        发送网络请求，将store中的title、article、tag发送到后台 
        */
            await publishData({
                title: articleTitle,
                content: article,
                tag: articleTag,
            })

            setVisible(false)
            setConfirmLoading(false)

            // 页面跳转
            navigation('/show')
        }
    })

    const handleCancel = () => {
        // console.log('Clicked cancel button')
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
