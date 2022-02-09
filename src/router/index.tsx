import Main from '@/views/main/main'
import Discuss from '@/pages/discuss'
import Ask from '@/pages/ask'
import Notes from '@/pages/notes'
import Articles from '@/pages/articles'
import Videos from '@/pages/videos'

import NoMatch from '@/views/NoMatch'

import type { RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Main />,
        children: [
            {
                index:true,
                element: <Discuss />,
            },
            {
                path: '/ask',
                element: <Ask />,
            },
            {
                path: '/notes',
                element: <Notes />,
            },
            {
                path: '/articles',
                element: <Articles />,
            },
            {
                path: '/videos',
                element: <Videos />,
            },
        ]
    },
    {path:"*",element:<NoMatch />}
]
export default routes
