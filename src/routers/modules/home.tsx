import type { RouteObject } from '@/routers/interface'
import Home from '@/views/home/index'

const homeRouter: RouteObject[] = [
  {
    element: <Home />,
    path: '/home/index',
    children: [
      {
        path: '/home/index',
        element: <Home />,
        meta: {
          requiresAuth: true,
          title: '首页',
          key: 'home',
        },
      },
    ],
  },
]

export default homeRouter
