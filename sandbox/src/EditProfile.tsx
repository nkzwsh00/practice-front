import { FC, useState } from "react";

export const EditProfile: FC = () => {
  const [isEditting, setIsEditting] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("Jane");
  const [lastName, setLastName] = useState<string>("Jacobs");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsEditting(!isEditting);
      }}
    >
      <label>
        First name:
        {isEditting ? (
          <input
            value={firstName}
            onChange={(e) => {
              e.preventDefault;
              setFirstName(e.target.value);
            }}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <br />
      <label>
        Last name:
        {isEditting ? (
          <input
            value={lastName}
            onChange={(e) => {
              e.preventDefault;
              setLastName(e.target.value);
            }}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <br />
      <button type="submit">{isEditting ? "Save" : "Edit"} Profile</button>
      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
};
