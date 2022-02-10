import AppHome from '@/views/main'
import Login from '@/views/login'
import NoMatch from '@/views/NoMatch'

import Main from '@/views/main/main'
import Discuss from '@/pages/discuss'
import Ask from '@/pages/ask'
import Notes from '@/pages/notes'
import Articles from '@/pages/articles'
import Videos from '@/pages/videos'

import DiscussArticle from '@/pages/discuss/cpns/discussArticle'

import type { RouteObject } from 'react-router-dom'

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
                path: '/discuss/:id',
                element: <DiscussArticle />,
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
    { path: '*', element: <NoMatch /> },
]
export default routes
