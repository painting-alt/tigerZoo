import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { getOneArticle } from '@/network/getArticle'

import MainList from '@/components/main-list'

import { changeOneArticle } from '@/store/article/actionCreators'

export default memo(function Ask() {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    const article = useSelector((state: any) => state.article)
    // 点击一篇文章，跳转到展示页面
    async function jumpToArticle(id: string) {
        const res: any = await getOneArticle({ id })
        console.log(res.result[0])
        dispatch(changeOneArticle(res.result[0]))
        navigate('/show/' + id)
    }
    return (
        <div>
            {article.all.map((item: any) => {
                const title = item.title
                return item.tag === '技术问答' ? (
                    <MainList
                        title={
                            <span onClick={() => jumpToArticle(item._id)}>
                                {title}
                            </span>
                        }
                        key={item._id}
                    />
                ) : null
            })}
        </div>
    )
})
