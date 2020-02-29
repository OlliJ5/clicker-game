const notificationReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return state.concat(action.data)
    case 'REMOVE_NOTIFICATION':
      return state.filter(noti => noti.id !== action.notiId)
    default:
      return state
  }
}

export default notificationReducer