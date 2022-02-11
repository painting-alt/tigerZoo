import React, { memo } from 'react'

// 样式相关
import { Modal, Button, Space } from 'antd'

// 参数类型
interface publishProps {
    visible: boolean
    setVisible: Function
}

const publish: React.FC<publishProps> = memo(props => {
    const [confirmLoading, setConfirmLoading] = React.useState(false)

    const { visible, setVisible } = props

    const handleOk = () => {
        setConfirmLoading(true)
        setTimeout(() => {
            setVisible(false)
            setConfirmLoading(false)
        }, 2000)
    }

    const handleCancel = () => {
        console.log('Clicked cancel button')
        setVisible(false)
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
            <Space>
                <Button>综合讨论</Button>
                <Button>技术问答</Button>
                <Button>笔记分享</Button>
            </Space>
        </Modal>
    )
})

export default publish
