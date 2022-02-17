// 主页面
import AppHome from '@/views/main'
import Auth from '@/views/auth'
import Publish from '@/views/publish'
import UserView from '@/views/user'
import NoMatch from '@/views/NoMatch'

import Main from '@/views/main/main'
import Discuss from '@/pages/discuss'
import Ask from '@/pages/ask'
import Notes from '@/pages/notes'
import Articles from '@/pages/articles'
import Videos from '@/pages/videos'

import ShowArticle from '@/components/show-article'

import type { RouteObject } from 'react-router-dom'
import PreviewArticle from '@/components/preview-article'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <AppHome />,
        children: [
            {
                path: '/',
                element: <Main />,
                children: [
                    {
                        index: true,
                        element: <Discuss />,
                    },
                    {
                        path: 'ask',
                        element: <Ask />,
                    },
                    {
                        path: 'notes',
                        element: <Notes />,
                    },
                    {
                        path: 'articles',
                        element: <Articles />,
                    },
                    {
                        path: 'videos',
                        element: <Videos />,
                    },
                ],
            },
            {
                path: '/show/:id',
                element: <ShowArticle />,
            },
            {
                path: '/preview/:id',
                element: <PreviewArticle />,
            },
        ],
    },
    {
        path: '/publish',
        element: <Publish />,
    },
    {
        path: '/auth',
        element: <Auth />,
    },
    {
        path: '/user',
        element: <UserView />,
    },
    { path: '*', element: <NoMatch /> },
]
export default routes
