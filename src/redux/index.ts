import { legacy_createStore as createStore } from 'redux'
import menu from './modules/menu/reducers'

// const reducer = combineReducers({
//   menu,
// })

const store = createStore(menu)
export { store }
