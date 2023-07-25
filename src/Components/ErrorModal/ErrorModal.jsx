import React from 'react'
import Card from '../Card/Card'
import Button from '../Button/Button'
import styles from './ErrorModal.module.css'

const ErrorModal = (props) => {
  return (
    <Card>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
        <Button>Close</Button>
      </footer>
    </Card>
  )
}

export default ErrorModal