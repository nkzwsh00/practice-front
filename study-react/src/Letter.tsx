import { typeLetter } from "./data";

type LetterProps = {
  letter: typeLetter;
  isHighlighted: boolean;
  onHover: (id: number) => void;
  onToggleStar: (starredId: number) => void;
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
        onHover(letter.id);
      }}
      onPointerMove={() => {
        onHover(letter.id);
      }}
    >
      <button
        onClick={() => {
          onToggleStar(letter.id);
        }}
      >
        {letter.isStarred ? "Unstar" : "Star"}
      </button>
      {letter.subject}
    </li>
  );
}
