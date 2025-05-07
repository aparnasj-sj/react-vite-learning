import React from "react";

const ChildComponent = ({ users }) => {
  return (
    <div>
      <h3>Users List:</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChildComponent;
