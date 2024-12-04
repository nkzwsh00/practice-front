import { useState } from "react";
import { letters } from "./data";
import Letter from "./Letter";

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const selectedCount = selectedIds?.length ?? 0;

  function handleToggle(toggledId: number): void {
    if (selectedIds.includes(toggledId)) {
      setSelectedIds(selectedIds.filter((id) => id !== toggledId));
      return;
    }
    setSelectedIds([...selectedIds, toggledId]);
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={selectedIds.includes(letter.id)}
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
