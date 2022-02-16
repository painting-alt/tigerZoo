// 第三方
import React, { FC, memo, useEffect, useState } from 'react'

// redux 相关
import { useDispatch, useSelector } from 'react-redux'
import { lightSigninByPassword, resetSignin } from '@/store/auth/actionCreators'
import IAppState from '@/store/type'
import { IAuthState } from '@/store/auth/type'
import { isSignin } from '@/store/user/actionCreators'

// 样式相关
import StyledForm from './styled'
import { Form, Input, Button, Checkbox, message } from 'antd'
import { SmileTwoTone, LockTwoTone } from '@ant-design/icons'

// SigninPasswordProps 组件参数类型
interface passwordProps {
    jumpToIndex: () => void
}

const SigninPassword: FC<passwordProps> = memo(props => {
    // 父组件传入数据
    const { jumpToIndex } = props

    // 组件内部数据
    const [isLoading, setIsLoading] = useState<boolean>(false)

    // 获取 dispatch
    const dispatch = useDispatch()

    const onFinish = (value: any) => {
        setIsLoading(true)
        dispatch(lightSigninByPassword(value))
    }

    // 1. 获取登录结果
    const auth = useSelector<IAppState, IAuthState>(state => state.auth)

    useEffect(() => {
        // 2. 登录失败 显示错误信息、取消按钮 loading
        if (auth.signin.loaded && !auth.signin.success) {
            message.error(auth.signin.message)
            setIsLoading(false)
        }

        // 3. 登录成功  取消按钮 loading、更新用户登录态、跳转主页面
        if (auth.signin.loaded && auth.signin.success) {
            setIsLoading(false)
            dispatch(isSignin())
            jumpToIndex()
        }
    }, [auth.signin, setIsLoading, dispatch, jumpToIndex])

    useEffect(() => {
        return () => {
            // 4. 离开页面之前，重置页面登录状态
            dispatch(resetSignin)
        }
    }, [dispatch])

    return (
        <StyledForm
            name='normal_signin'
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name='username'
                rules={[{ required: true, message: '请输入您的用户名' }]}
            >
                <Input prefix={<SmileTwoTone />} placeholder='用户名' />
            </Form.Item>

            <Form.Item
                name='password'
                rules={[{ required: true, message: '请输入您的密码' }]}
            >
                <Input.Password
                    prefix={<LockTwoTone />}
                    type='password'
                    placeholder='密码'
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name='remember' valuePropName='checked' noStyle>
                    <Checkbox>记住用户信息</Checkbox>
                </Form.Item>

                <a className='signin-form-forgot' href='/#'>
                    忘记密码
                </a>
            </Form.Item>

            <Form.Item>
                <Button
                    className='signin-form-button'
                    type='primary'
                    htmlType='submit'
                    loading={isLoading}
                >
                    登录
                </Button>
            </Form.Item>
        </StyledForm>
    )
})

export default SigninPassword
