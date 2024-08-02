import { useState } from "react";
import { letters } from "./data";
import Letter from "./Letter";

export default function MailClient() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // TODO: allow multiple selection
  const selectedCount = 1;

  function handleToggle(toggledId: number): void {
    // TODO: allow multiple selection
    setSelectedId(toggledId);
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              letter.id === selectedId
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
