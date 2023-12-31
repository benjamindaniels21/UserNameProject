import React from 'react'
import Card from '../Card/Card'
import styles from './UsersList.module.css'


const UsersList = (props) => {
  return (
    <Card className={styles.user}>
    <ul className={styles.list}>
      {props.users.map((user) =>  {
      return(
      <li key={user.id} className={styles.listItem}>{user.name} ({user.age} years old)</li>)})}
    </ul>
    </Card>
  )
}

export default UsersList