import Discuss from '@/pages/discuss'
import Ask from '@/pages/ask'
import Notes from '@/pages/notes'
import Articles from '@/pages/articles'
import Videos from '@/pages/videos'

import type { RouteObject } from 'react-router-dom'
// import Discuss from '../pages/articles'
// import Ask from '../pages/ask'
// import Notes from '../pages/notes'
// import Articles from '../pages/articles'
// import Videos from '../pages/videos'

const routes: RouteObject[] = [
    {
        path: '/',
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
export default routes
