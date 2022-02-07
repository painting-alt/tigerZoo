import Discuss from '@/pages/discuss'
import Ask from '@/pages/ask'
import Notes from '@/pages/notes'
import Articles from '@/pages/articles'
import Videos from '@/pages/videos'

const routes: any = [
    {
        path: '/',
        exact: true,
        component: Discuss,
    },
    {
        path: '/ask',
        component: Ask,
    },
    {
        path: '/notes',
        component: Notes,
    },
    {
        path: '/articles',
        component: Articles,
    },
    {
        path: '/videos',
        component: Videos,
    },
]

export default routes
