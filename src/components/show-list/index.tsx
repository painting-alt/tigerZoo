import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { EyeOutlined, LikeOutlined, LikeTwoTone } from '@ant-design/icons'

import { getOneArticle } from '@/network/getArticle'
import { updateAdd } from '@/network/update'

import MainList from '@/components/main-list'

import {
    changeOneArticle,
    changeAllArtcile,
} from '@/store/article/actionCreators'

interface ShowListProps {
    tag: string
}

export default memo(function ShowList(props: ShowListProps) {
    // 解构组件参数
    const { tag } = props

    // 获取 dispatch、navigate 方法
    let dispatch = useDispatch()
    let navigate = useNavigate()

    const all = useSelector((state: any) => state.article.all)
    // console.log(all)

    // 点击一篇文章，跳转到展示页面
    async function jumpToArticle(id: string) {
        const res: any = await getOneArticle({ id })
        // console.log(res.result[0])
        dispatch(changeOneArticle(res.result[0]))
        navigate('/show/' + id)
    }

    async function add(count: number, id: string, state: boolean) {
        for (let k of all) {
            if (k._id === id) {
                //state为true，则图标高亮显示，说明已经加1
                count = state ? count - 1 : count + 1
                state = !state //点击完之后，state状态取反
                k.like = count
                k.state = state
                dispatch(changeAllArtcile([...all]))
                break
            }
        }
        updateAdd({ id, count, state })
    }
    return (
        <div>
            {all.map((item: any) => {
                const title = item.title
                const view = item.view || 0
                const like = item.like || 0
                const state = item.state || false //请求下来的状态
                return item.tag === tag ? (
                    <MainList
                        title={
                            <span onClick={() => jumpToArticle(item._id)}>
                                {title}
                            </span>
                        }
                        view={
                            <span>
                                <EyeOutlined />
                                {view}
                            </span>
                        }
                        like={
                            <span onClick={() => add(like, item._id, state)}>
                                {state ? <LikeTwoTone /> : <LikeOutlined />}
                                {like}
                            </span>
                        }
                        key={item._id}
                    />
                ) : null
            })}
        </div>
    )
})
