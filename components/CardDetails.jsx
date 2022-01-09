import react from "react";
import styles from "../styles/cardDetails.module.css";

export const CardDetails = ({ birthday, phone, email, createdAt }) => {
  return (
    <ul className={styles.details}>
      <li>
        <h2>Birthday:</h2>
        <p>{birthday}</p>
      </li>
      <li>
        <h2>Phone Number:</h2>
        <p>{phone}</p>
      </li>
      <li>
        <h2>Email address:</h2>
        <p>{email}</p>
      </li>
      <li>
        <h2>Created at:</h2>
        <p>{createdAt}</p>
      </li>
    </ul>
  );
};
