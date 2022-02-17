import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import articleStyle from '@/assets/css/css_modules/article.module.css'

import { updateView } from '@/network/update'
import { getOneArticle } from '@/network/getArticle'

// import { changeOneArticle } from '@/store/actionCreators'
import { changeOneArticle } from '@/store/article/actionCreators'
// import throttle from '@/utils/throttle'

interface IParam {
    id?: string
}

export default memo(function ShowArticle(props: IParam) {
    // 解构组件参数
    const { id } = useParams()

    // 获取 dispatch 方法
    const dispatch = useDispatch()

    // 获取 store 数据
    const article = useSelector((state: any) => state.article)
    const oneArticle = article.oneArticle
    const view = oneArticle.view || 0
    const lastTime: number = oneArticle.timeRecord || 0

    useEffect(() => {
        async function getData() {
            const res: any = await getOneArticle({ id })
            dispatch(changeOneArticle(res.result[0]))
            //前端拿到浏览状态，确定是否可以+1
        }
        getData()

        async function update() {
            //记录本次访问时间
            const nowTime = new Date().getTime()
            // console.log(nowTime)
            // console.log(lastTime)
            if (nowTime - lastTime > 50000) {
                let viewCount = view
                viewCount = view + 1
                let newLastTime = nowTime
                await updateView({ id, view: viewCount, lastTime: newLastTime })
                // console.log(newLastTime)
            }
        }
        update()
    })

    return (
        <div style={{ padding: '30px' }}>
            <h1>{oneArticle.title}</h1>
            <div className={articleStyle.p}>
                <ReactMarkdown
                    children={oneArticle.content}
                    remarkPlugins={[remarkGfm]}
                />
            </div>
        </div>
    )
})
