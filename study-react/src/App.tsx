import { FC, useState } from "react";
import { Contact, ContactProps } from "./Contact";

const contacts: ContactProps[] = [
  { id: 0, name: "Alice", email: "alice@mail.com" },
  { id: 1, name: "Bob", email: "bob@mail.com" },
  { id: 2, name: "Taylor", email: "taylor@mail.com" },
];

const ContactList: FC = () => {
  const [reverse, setReverse] = useState<boolean>(false);

  const displayedContacts: ContactProps[] = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={reverse}
          onChange={(e) => {
            setReverse(e.target.checked);
          }}
        />{" "}
        Show in reverse order
      </label>
      <ul>
        {displayedContacts.map((contact: ContactProps) => (
          <li key={contact.id}>
            <Contact {...contact} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
