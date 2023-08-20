import { ConfigProvider } from 'antd'
import Router from '@/routers/index'

function App() {
  return (
    <ConfigProvider>
			<Router />
    </ConfigProvider>
  )
}

export default App
