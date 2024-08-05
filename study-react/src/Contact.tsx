import React, { useState } from "react";

export type ContactProps = {
  id: number;
  name: string;
  email: string;
};

export const Contact: React.FC<ContactProps> = (contact) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <>
      <p>
        <b>{contact.name}</b>
      </p>
      {expanded && (
        <p>
          <i>{contact.email}</i>
        </p>
      )}
      <button
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? "Hide" : "Show"} email
      </button>
    </>
  );
};
