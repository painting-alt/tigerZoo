import React, { memo } from 'react'
import { useSelector} from 'react-redux'

export default memo(function ShowArticle() {
  const articleTitle = useSelector((state: any) => state.title)
  const article = useSelector((state: any) => state.article)
  const articleTag = useSelector((state:any) => state.tag)
  console.log(articleTitle,article,articleTag)
  return (
    <div>
      <p>{articleTitle}</p>
      <p>{article}</p>
      <p>{ articleTag}</p>
    </div>
  )
}
)