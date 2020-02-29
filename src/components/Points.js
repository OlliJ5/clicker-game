import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from 'semantic-ui-react'



const Points = () => {
  const dispatch = useDispatch()
  const points = useSelector(state => state.points)

  const negative = points.filter(point => point.value < 0)
  const positive = points.filter(point => point.value > 0)

  return (
    <Grid>
      <Grid.Row
        columns={2}
        style={{ marginTop: '100px' }}
      >
        <Grid.Column
          floated='left'
          width={4}
        >
          {negative.map(point => (
            <div
              key={point.id}
              className='animationWrapper'
            >
              <h2
                className='score'
                style={{ color: 'red' }}
                onAnimationEnd={() => dispatch({ type: 'REMOVE_POINT', pointId: point.id })}
              >
                {point.value}
              </h2>
            </div>
          )
          )}
        </Grid.Column>
        <Grid.Column
          floated='right'
          width={4}
        >
          {positive.map(point => (
            <div
              key={point.id}
              className='animationWrapper'
            >
              <h2
                className='score'
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
  )
}

export default Points