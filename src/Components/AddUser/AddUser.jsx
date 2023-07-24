import React, { useState } from 'react'
import Card from '../Card/Card';
import styles from "./AddUser.module.css"
import Button from '../Button/Button';

const AddUser = (props) => {

  const [enteredUserName, setEnteredUserName] =useState('');
  const [enteredUserAge, setEnteredUserAge] =useState('');

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  }

  const userAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  }
  
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUserName, enteredUserAge);
  }
  
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="">Username</label>
        <input type="text" id='username' onChange={userNameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id='age'onChange={userAgeChangeHandler}/>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser