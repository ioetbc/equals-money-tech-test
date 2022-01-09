import react, { useEffect, useState } from "react";
import styles from "./styles/app.module.css";

import { Card } from "./components/Card";

export const App = () => {
  // TODO
  // MOVE THE USERS STATE INTO THE PROVIDER
  // MOVE THE UPDATE FUNCTIONS INTO UTIL FOLDER AND UPDATE THE STATE IN THE PROVIDER
  // MOVE THE BASE URL INTO CONFIG

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    return fetch("https://61c32f169cfb8f0017a3e9f4.mockapi.io/api/v1/contacts")
      .then((response) => response.text())
      .then((data) => setUsers(JSON.parse(data)));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDeleteUser = (id) => {
    fetch(`https://61c32f169cfb8f0017a3e9f4.mockapi.io/api/v1/contacts/${id}`, {
      method: "DELETE",
    }).then(() => getUsers());
  };

  const handleEditCard = (id, editedDetails) => {
    const user = users.find((user) => user.id === id);
    const editedUser = { ...user, ...editedDetails };

    fetch(`https://61c32f169cfb8f0017a3e9f4.mockapi.io/api/v1/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedUser),
    }).then(() => getUsers());
  };

  const toggleCardDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={styles.siteWrapper}>
      {users.map((user, index) => (
        <Card
          user={user}
          toggleCardDetails={toggleCardDetails}
          handleDeleteUser={handleDeleteUser}
          handleEditCard={handleEditCard}
          key={index}
        />
      ))}
    </div>
  );
};
