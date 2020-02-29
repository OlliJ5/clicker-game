import React, { useEffect, useState } from 'react'
import { Container } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { initScore } from './reducers/scoreReducer'
import './App.css'
import PlayButton from './components/PlayButton'
import Header from './components/Header'
import ResetProgress from './components/ResetProgress'
import Points from './components/Points'

const App = () => {
  const dispatch = useDispatch()

  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    dispatch(initScore())
  }, [dispatch])


  return (
    <Container>
      <PlayButton setModalOpen={setModalOpen} />
      <Header />
      <ResetProgress modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Points />
    </Container >
  )
}

export default App
