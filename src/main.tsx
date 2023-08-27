import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.tsx'
import '@/styles/reset.less'
import { store } from '@/redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Provider>,
)
