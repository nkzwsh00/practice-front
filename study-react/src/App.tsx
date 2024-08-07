import { useReducer } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";
import { initialState, messengerReducer } from "./messengerReducer";

type Contact = {
  id: number;
  name: string;
  email: string;
};

type State = {
  selectedId: number;
  message: string;
};

const Messenger = () => {
  const [state, dispatch] = useReducer<State, any>(
    messengerReducer,
    initialState
  );
  const message = state.message;
  const contact = contacts.find((c: Contact) => c.id === state.selectedId);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
};

const contacts: Contact[] = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

export default Messenger;
