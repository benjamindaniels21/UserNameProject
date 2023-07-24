import React, { useState } from 'react'
import Card from '../Card/Card';
import styles from "./AddUser.module.css"
import Button from '../Button/Button';

const AddUser = (props) => {

  const [enteredUserName, setEnteredUserName] =useState('');
  
  const addUserHandler = (event) => {
    event.preventDefault();

  }
  
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="">Username</label>
        <input type="text" id='username'/>
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id='age'/>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser