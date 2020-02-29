import React from 'react'
import { useDispatch } from 'react-redux'
import { Modal, Button, Icon } from 'semantic-ui-react'

const ResetProgress = ({ modalOpen, setModalOpen }) => {
  const dispatch = useDispatch()

  return (
    <Modal
      basic
      size="small"
      open={modalOpen}
    >
      <Modal.Header>
        Reset progress?
      </Modal.Header>
      <Modal.Content>
        <p>
          Oh no...looks like you are all out of points. Would you like to reset
          your progress?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          onClick={() => setModalOpen(false)}
          basic
          color="red"
          inverted
        >
          <Icon
            name="remove"
          />
          No
        </Button>
        <Button
          onClick={() => { dispatch({ type: 'SET_SCORE', data: 20 }); setModalOpen(false) }}
          color="green"
          inverted
        >
          <Icon
            name="checkmark"
          />
          Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ResetProgress