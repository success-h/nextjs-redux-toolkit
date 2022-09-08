import React, { useState } from "react";

export default function Clock() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  const addNewUser = () => {
    setUsers([...users, name]);
  };

  return (
    <div>
      <label>New User:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addNewUser}>Add</button>
      <h4>User List:</h4>
      <ol>
        {users.map((user) => (
          <li>{user}</li>
        ))}
      </ol>
    </div>
  );
}
