import react, { useState } from "react";
import styles from "../styles/card.module.css";

import { FormItem } from "./FormItem";
import { CardDetails } from "./CardDetails";

export const Card = ({ user, handleDeleteUser, handleEditCard }) => {
  const { name, avatar, birthday, phone, email, createdAt, id, key } = user;

  const [isEditing, setIsEditing] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [editedDetails, setEditedDetails] = useState({ ...user });

  const handleForm = (event) => {
    event.preventDefault();
    setIsEditing(false);
    handleEditCard(id, editedDetails);
  };
  return (
    <div className={styles.card} key={key}>
      <div className={styles.cardWrapper}>
        <h1 className={styles.title}>{name}</h1>
        <img
          className={styles.image}
          src={avatar}
          alt={`${name} profile picture`}
        />
      </div>

      <div className={styles.buttonWrapper}>
        <button
          className={styles.button}
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Less details" : "More details"}
        </button>
        {showDetails && (
          <CardDetails
            birthday={birthday}
            phone={phone}
            email={email}
            createdAt={createdAt}
          />
        )}
        <button
          className={styles.button}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Exit Editing" : "Edit Details"}
        </button>
        <button className={styles.button} onClick={() => handleDeleteUser(id)}>
          Delete card
        </button>
      </div>

      {isEditing && (
        <form onSubmit={(event) => handleForm(event, editedDetails)}>
          <FormItem
            formLabel="Phone Number"
            updateKey="phone"
            defaultValue={phone}
            user={user}
            setEditedDetails={setEditedDetails}
            editedDetails={editedDetails}
            type="tel"
          />
          <FormItem
            formLabel="Email Address"
            updateKey="email"
            defaultValue={email}
            user={user}
            setEditedDetails={setEditedDetails}
            editedDetails={editedDetails}
            type="email"
          />
          <FormItem
            formLabel="Full Name"
            updateKey="name"
            defaultValue={name}
            user={user}
            setEditedDetails={setEditedDetails}
            editedDetails={editedDetails}
            type="text"
          />
          <button type="submit">Save changes</button>
        </form>
      )}
    </div>
  );
};
