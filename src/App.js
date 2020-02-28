import React, { useEffect, useState } from 'react'
import { Container, Grid, Modal, Button, Icon, Header } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { addPoint } from './reducers/pointReducer'
import { initScore } from './reducers/scoreReducer'
import './App.css'

const App = () => {
  const dispatch = useDispatch()
  const score = useSelector(state => state.score)
  const points = useSelector(state => state.points)
  const notifications = useSelector(state => state.notifications)

  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    dispatch(initScore())
  }, [dispatch])

  const play = async () => {
    dispatch(addPoint())
  }

  const negative = points.filter(point => point.value < 0)
  const positive = points.filter(point => point.value > 0)

  return (
    <Container>
      <div style={{ position: 'absolute', left: '50%', top: '30%' }}>
        <button className='playButton' onClick={score > 0 ? play : () => setModalOpen(true)}>PLAY</button>
      </div>
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>
            <h1>Clicker</h1>
          </Grid.Column>
          <Grid.Column>
            {notifications.length > 0 && (
              <div className='notification'>{notifications[notifications.length - 1].message}</div>
            )}
          </Grid.Column>
          <Grid.Column>
            <h1 style={{ textAlign: 'right' }}>Score: {score}</h1>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {score < 1 && (
        <Modal
          basic
          size="small"
          open={modalOpen}>
          <Header content="Reset progress" />
          <Modal.Content>
            <p>
              Oh no...looks like you are all out of points. Would you like to reset
              your progress?
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => setModalOpen(false)} basic color="red" inverted>
              <Icon name="remove" /> No
            </Button>
            <Button onClick={() => dispatch({ type: 'SET_SCORE', data: 20 })} color="green" inverted>
              <Icon name="checkmark" /> Yes
            </Button>
          </Modal.Actions>
        </Modal>
      )}
      <Grid>
        <Grid.Row columns={2} style={{ marginTop: '100px' }}>
          <Grid.Column floated='left' width={4}>
            {negative.map(point => (
              <div key={point.id} className='animationWrapper'>
                <h2 className='score'
                  style={{ color: 'red' }}
                  onAnimationEnd={() => dispatch({ type: 'REMOVE_POINT', pointId: point.id })}
                >
                  {point.value}
                </h2>
              </div>
            )
            )}
          </Grid.Column>
          <Grid.Column floated='right' width={4}>
            {positive.map(point => (
              <div key={point.id} className='animationWrapper'>
                <h2 className='score'
                  style={{ color: 'green' }}
                  onAnimationEnd={() => dispatch({ type: 'REMOVE_POINT', pointId: point.id })}
                >
                  {point.value}
                </h2>
              </div>
            )
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default App
