import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from 'semantic-ui-react'

const Header = () => {
  const notifications = useSelector(state => state.notifications)
  const score = useSelector(state => state.score)

  return (
    <Grid>
      <Grid.Row
        columns={3}
      >
        <Grid.Column>
          <h1>
            Clicker
          </h1>
        </Grid.Column>
        <Grid.Column>
          {notifications.length > 0 && (
            <div
              className='notification'
            >
              {notifications[notifications.length - 1].message}
            </div>
          )}
        </Grid.Column>
        <Grid.Column>
          <h1
            style={{ textAlign: 'right' }}
          >
            Score: {score}
          </h1>
        </Grid.Column>
      </Grid.Row>
    </Grid >
  )
}

export default Header