const scoreReducer = (state = 0, action) => {
  switch (action.type) {
    case 'SET_SCORE':
      return action.data
    default:
      return state
  }
}

export const initScore = () => {
  const score = parseInt(window.localStorage.getItem('userScore'))
  if (!score && score !== 0) {
    console.log('scoreksi laitetaan 20')
    window.localStorage.setItem('userScore', 20)
  }

  return {
    type: 'SET_SCORE',
    data: !score && score !== 0 ? 20 : score
  }
}

export const addScore = (addition) => {
  const score = parseInt(window.localStorage.getItem('userScore'))
  window.localStorage.setItem('userScore', score ? score + addition : 20 + addition)

  return {
    type: 'SET_SCORE',
    data: score ? score + addition : 20
  }
}

export default scoreReducer