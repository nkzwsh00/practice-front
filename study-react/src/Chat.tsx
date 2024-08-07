import React, { useState, ChangeEvent, Dispatch } from "react";

interface Contact {
  name: string;
  email: string;
}

interface ChatProps {
  contact: Contact;
  message: string;
  dispatch: Dispatch<any>;
}

const Chat: React.FC<ChatProps> = ({ contact, message, dispatch }) => {
  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({
      type: "edited_message",
      message: e.target.value,
    });
  };

  const handleSendMessage = () => {
    alert(`Sending "${message}" to ${contact.email}`);
    dispatch({
      type: "sent_message",
    });
  };

  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={"Chat to " + contact.name}
        onChange={handleMessageChange}
      />
      <br />
      <button onClick={handleSendMessage}>Send to {contact.email}</button>
    </section>
  );
};

export default Chat;
