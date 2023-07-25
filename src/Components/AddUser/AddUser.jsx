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
    if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      return;
    }

    if(+enteredUserAge < 1) {
      return;
    }

    console.log(enteredUserName, enteredUserAge);
    setEnteredUserName('');
    setEnteredUserAge('');
  }
  
  return (
    <Card className={styles.input} >
      <form onSubmit={addUserHandler}>
        <label htmlFor="">Username</label>
        <input type="text" id='username' value={enteredUserName} onChange={userNameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input type="number" value={enteredUserAge} id='age'onChange={userAgeChangeHandler}/>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser