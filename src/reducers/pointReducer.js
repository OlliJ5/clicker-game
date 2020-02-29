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
    const res = await axios.post('https://cryptic-cliffs-66031.herokuapp.com/counter/click')
    const prize = res.data.prize

    //Change the score of the player
    dispatch(addScore(prize - 1))

    //Set a notification about the win or how many clicks left
    const message = prize === 0
      ? `${res.data.clicksToWin} clicks to a prize!`
      : `You won ${prize} points!`

    const notiId = shortid.generate()
    dispatch({ type: 'ADD_NOTIFICATION', data: { message, id: notiId } })

    //Remove the notification after 3 sec
    setTimeout(() => {
      dispatch({ type: 'REMOVE_NOTIFICATION', notiId })
    }, 3000)

    //the point for playing which is always -1
    const participationPoint = {
      value: -1,
      id: shortid.generate(),
    }
    dispatch({
      type: 'ADD_POINT',
      data: participationPoint
    })

    //dispatch another point if the player actually wins something
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