import { Navigate, useRoutes } from 'react-router-dom'
import type { RouteObject } from '@/routers/interface'
import Login from '@/views/login/index'

// 获取所有模块的路由

export const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      requiresAuth: false,
      title: '登录页',
      key: 'login',
    },
  },
  {
    path: '*',
    element: <Navigate to="/404" />,
  },
]

function Router() {
  const routes = useRoutes(rootRouter)
  return routes
}

export default Router
