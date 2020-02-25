import React, { useState, useEffect } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import shortid from 'shortid'
import './App.css'

const App = () => {
  const [score, setScore] = useState(20)
  const [points, setPoints] = useState([])

  useEffect(() => {
    const score = parseInt(window.localStorage.getItem('userScore'))
    if (score) {
      setScore(score)
    } else {
      setScore(20)
    }
  }, [])

  const play = () => {
    const value = -1
    const newScore = score + value
    window.localStorage.setItem('userScore', newScore)
    setScore(newScore)
    const pointObject = {
      value,
      id: shortid.generate()
    }
    setPoints(points.concat(pointObject))
  }

  const remove = (id) => {
    console.log('halutaan poistaa indeksi', id)
    setPoints(points.filter(point => point.id !== id))
  }

  console.log('pojot', points)

  return (
    <Container>
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>
            <h1>Clicker game</h1>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
            <h1 style={{ textAlign: 'right' }}>Your score: {score}</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
            {points.map(point => (
              <div key={point.id} className='animationWrapper'>
                <h2 className='score' onAnimationEnd={() => remove(point.id)}>{point.value}</h2>
              </div>
            )
            )}
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
        <button className='playButton' onClick={play}>PLAY</button>
      </Grid>
    </Container>
  )
}

export default App
