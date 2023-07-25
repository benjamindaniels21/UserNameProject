import React, { useState } from "react";
import AddUser from "./Components/AddUser/AddUser";
import UsersList from "./Components/UsersList/UsersList";

function App() {
  // const [namesList, setNamesList] = useState({
  //   name: "Ben",
  //   age: 36,
  // });

  return (
    <div>
      <AddUser />
      <UsersList users={["Ben"]} />
    </div>
  );
}

export default App;
