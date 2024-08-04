import React from "react";

// DRY じゃないけど、問いの本筋から外れるので、このままにしておく
export type Contact = {
  id: number;
  name: string;
  email: string;
};

type ContactListProps = {
  contacts: Contact[];
  selectedId: number;
  onSelect: (id: number) => void;
};

export const ContactList: React.FC<ContactListProps> = ({
  contacts,
  selectedId,
  onSelect,
}) => {
  return (
    <section>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button onClick={() => onSelect(contact.id)}>
              {contact.id === selectedId ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
