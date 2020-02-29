import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPoint } from '../reducers/pointReducer'

const PlayButton = ({ setModalOpen }) => {
  const dispatch = useDispatch()
  const score = useSelector(state => state.score)

  const play = async () => {
    dispatch(addPoint())
  }

  return (
    <div
      style={{ position: 'absolute', left: '50%', top: '30%' }}
    >
      <button
        className='playButton'
        onClick={score > 0 ? play : () => setModalOpen(true)}
      >
        PLAY
      </button>
    </div>
  )
}

export default PlayButton