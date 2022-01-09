import react from "react";
export const FormItem = ({
  formLabel,
  updateKey,
  defaultValue,
  user,
  setEditedDetails,
  editedDetails,
  type,
}) => {
  return (
    <>
      <label>{formLabel}</label>
      <input
        type={type}
        name={updateKey}
        defaultValue={defaultValue}
        value={editedDetails[updateKey]}
        onChange={(event) =>
          setEditedDetails({ ...user, [updateKey]: event.target.value })
        }
      ></input>
    </>
  );
};
