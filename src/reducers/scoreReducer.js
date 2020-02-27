const scoreReducer = (state = 20, action) => {
  switch (action.type) {
    case 'SET_SCORE':
      return action.data
    case 'ADD_SCORE':
      return action.data + state
    default:
      return state
  }
}

export const initScore = ()  => {
  const score = parseInt(window.localStorage.getItem('userScore'))

  return {
    type:'SET_SCORE',
    data: score ? score: 20
  }
}

export default scoreReducer