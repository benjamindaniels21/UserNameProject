import React, { useState } from "react";
import AddUser from "./Components/AddUser/AddUser";
import UsersList from "./Components/UsersList/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [showList, setShowList] = useState(false);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
    setShowList(true);
  };

  console.log(usersList.length);
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {showList && <UsersList users={usersList} />}
    </div>
  );
}

export default App;
