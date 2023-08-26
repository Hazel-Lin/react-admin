import type { RouteObject } from '@/routers/interface'
import Home from '@/views/home/index'
import Layout from '@/layout/index'

const homeRouter: RouteObject[] = [
  {
    element: <Layout />,
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
