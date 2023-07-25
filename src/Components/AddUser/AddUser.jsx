import React, { useState } from 'react'
import Card from '../Card/Card';
import styles from "./AddUser.module.css"
import Button from '../Button/Button';
import ErrorModal from '../ErrorModal/ErrorModal';

const AddUser = (props) => {

  const [enteredUserName, setEnteredUserName] =useState('');
  const [enteredUserAge, setEnteredUserAge] =useState('');
  const [error, setError] = useState();

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  }

  const userAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  }
  
  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a name and age"
      })
      return;
    }

    if(+enteredUserAge < 1 || enteredUserAge === null) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (greater than 0)"
      })
      return;
    }

    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUserName('');
    setEnteredUserAge('');
  }
  
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message}/>}
      <Card className={styles.input} >
        <form onSubmit={addUserHandler}>
          <label htmlFor="">Username</label>
          <input type="text" id='username' value={enteredUserName} onChange={userNameChangeHandler}/>
          <label htmlFor="age">Age (Years)</label>
          <input type="number" value={enteredUserAge} id='age'onChange={userAgeChangeHandler}/>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser