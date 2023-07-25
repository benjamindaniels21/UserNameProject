import React from 'react'
import Card from '../Card/Card'
import styles from '../Card/Card.module.css'


const UsersList = (props) => {
  return (
    <Card className={styles.card}>
    <ul className={styles.list}>
      {props.users.map((user) =>  {
      return(
      <li>{user.name} ({user.age} years old)</li>)})}
    </ul>
    </Card>
  )
}

export default UsersList