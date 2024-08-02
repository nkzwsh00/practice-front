import { useState } from "react";
import { initialLetters, typeLetter } from "./data";
import Letter from "./Letter";

export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedLetter, setHighlightedLetter] = useState<typeLetter | null>(
    null
  );

  function handleHover(letter: typeLetter) {
    setHighlightedLetter(letter);
  }

  function handleStar(starred: { id: number }) {
    setLetters(
      letters.map((letter) => {
        if (letter.id === starred.id) {
          return {
            ...letter,
            isStarred: !letter.isStarred,
          };
        } else {
          return letter;
        }
      })
    );
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={letter === highlightedLetter}
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}
