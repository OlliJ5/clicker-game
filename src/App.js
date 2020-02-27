import React, { useEffect } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { addPoint } from './reducers/pointReducer'
import { initScore } from './reducers/scoreReducer'
import './App.css'

const App = () => {
  const dispatch = useDispatch()
  const score = useSelector(state => state.score)
  const points = useSelector(state => state.points)

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
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <h1>Clicker</h1>
          </Grid.Column>
          <Grid.Column>
            <h1 style={{ textAlign: 'right' }}>Score: {score}</h1>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div style={{ paddingTop: '100px' }}>
        <button className='playButton' onClick={play}>PLAY</button>
      </div>
      <Grid>
        <Grid.Row columns={2}>
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
