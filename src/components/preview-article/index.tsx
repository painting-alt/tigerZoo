import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import articleStyle from '@/assets/css/css_modules/article.module.css'

export default memo(function ShowArticle() {
    const articleStore = useSelector((state: any) => state.article)

    const article = articleStore.article

    return (
        <div style={{ padding: '30px' }}>
            <h1>{article.title}</h1>
            <div className={articleStyle.p}>
                <ReactMarkdown
                    children={article.article}
                    remarkPlugins={[remarkGfm]}
                />
            </div>
        </div>
    )
})
