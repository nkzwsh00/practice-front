import React from "react";

interface Contact {
  id: number;
  name: string;
}

interface ContactListProps {
  contacts: Contact[];
  selectedId: number;
  dispatch: React.Dispatch<any>;
}

const ContactList: React.FC<ContactListProps> = ({
  contacts,
  selectedId,
  dispatch,
}) => {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                dispatch({
                  type: "changed_selection",
                  contactId: contact.id,
                });
              }}
            >
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactList;
