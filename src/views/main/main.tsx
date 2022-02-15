import React, { memo } from 'react';
import { Outlet,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
// 样式
import mainStyle from '@/assets/css/css_modules/main.module.css'

import { changeAllArtcile } from '@/store/actionCreators'; 

import { getAllArticle } from '@/network/getArticle';


export default memo(function Main() {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  // 进入这个页面就发送网络请求
  const fetch = async() => { 
    const result:any = await getAllArticle()
    console.log(result)
    function pushToStore() { 
      dispatch(changeAllArtcile(result.result))
    }
    pushToStore()
  }
  fetch()
  function handleItemClick(item: string) { 
    switch (item) { 
      case 'discuss':
        navigate('/');
        break;
      case 'ask':
        navigate('/ask')
        break;
      case 'notes':
        navigate('/notes')
        break;
      case 'articles':
        navigate('/articles')
        break;
      case 'videos':
        navigate('/videos')
        break;
    }

  }
  return <div className='main'>
    <div className={ mainStyle.nav}>
    <span onClick={()=>handleItemClick('discuss')}>综合讨论</span>
    <span onClick={()=>handleItemClick('ask')}>技术问答</span>
    <span onClick={()=>handleItemClick('notes')}>笔记分享</span>
    <span onClick={()=>handleItemClick('articles')}>好文精选</span>
    <span onClick={()=>handleItemClick('videos')}>视频课程</span>
    </div>
    <hr />
    <Outlet />
  </div>;
}
)