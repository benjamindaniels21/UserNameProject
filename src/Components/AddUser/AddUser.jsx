import React from 'react'
import Card from '../Card/Card';
import styles from "./AddUser.module.css"

const AddUser = (props) => {
  
  const addUserHandler = (event) => {
    event.preventDefault();
  }
  
  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="">Username</label>
        <input type="text" id='username'/>
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id='age'/>
        <button type='submit'>Add User</button>
      </form>
    </Card>
  )
}

export default AddUser