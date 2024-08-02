import { typeLetter } from "./data";

type LetterProps = {
  letter: typeLetter;
  isHighlighted: boolean;
  onHover: (letter: typeLetter) => void;
  onToggleStar: (starred: { id: number }) => void;
};

export default function Letter({
  letter,
  isHighlighted,
  onHover,
  onToggleStar,
}: LetterProps) {
  return (
    <li
      className={isHighlighted ? "highlighted" : ""}
      onFocus={() => {
        onHover(letter);
      }}
      onPointerMove={() => {
        onHover(letter);
      }}
    >
      <button
        onClick={() => {
          onToggleStar(letter);
        }}
      >
        {letter.isStarred ? "Unstar" : "Star"}
      </button>
      {letter.subject}
    </li>
  );
}
