import axios from 'axios'
import shortid from 'shortid'

const pointReducer = (state = [], action) => {
  console.log('state:', state, 'action', action)
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
    const res = await axios.post('/score/click')
    const value = res.data.prize

    dispatch({
      type: 'ADD_SCORE',
      data: value
    })

    const point = {
      value,
      id: shortid.generate(),
    }
    dispatch({
      type: 'ADD_POINT',
      data: point
    })
  }
}

export default pointReducer