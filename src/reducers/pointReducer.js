import axios from 'axios'
import shortid from 'shortid'
import { addScore } from './scoreReducer'

const pointReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POINT':
      return state.concat(action.data)
    case 'REMOVE_POINT':
      return state.filter(point => point.id !== action.pointId)
    default:
      return state
  }
}

export const addPoint = () => {
  return async dispatch => {
    const res = await axios.post('/counter/click')
    const prize = res.data.prize

    const message = res.data.clicksToWin > 0
      ? `${res.data.clicksToWin} clicks to a prize`
      : `You won ${prize}`

    dispatch(addScore(prize - 1))

    const notiId = shortid.generate()
    dispatch({ type: 'ADD_NOTIFICATION', data: { message, id: notiId } })

    setTimeout(() => {
      dispatch({ type: 'REMOVE_NOTIFICATION', notiId })
    }, 3000)

    //the point for playing or -1
    const participationPoint = {
      value: -1,
      id: shortid.generate(),
    }
    dispatch({
      type: 'ADD_POINT',
      data: participationPoint
    })

    //dispatch another if the player actually wins something
    if (prize > 0) {
      const prizePoint = {
        value: prize,
        id: shortid.generate(),
      }
      dispatch({
        type: 'ADD_POINT',
        data: prizePoint
      })

    }
  }
}

export default pointReducer