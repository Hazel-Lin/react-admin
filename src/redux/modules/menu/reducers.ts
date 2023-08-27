// 定义一个menu
const initialState = {
  isCollapse: false,
}

// Reducer 接收两个参数：当前状态和 Action，然后返回新的状态。
// Reducers 是纯函数，用于根据接收到的 Action 来更新应用的状态。
function menu(state = initialState, action: any) {
  switch (action.type) {
    case 'UPDATE_COLLAPSE':
      return {
        ...state,
        isCollapse: !state.isCollapse,
      }
    default:
      return state
  }
}

export default menu
