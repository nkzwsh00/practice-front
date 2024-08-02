import { typeLetter } from "./data";
export default function Letter({
  letter,
  onToggle,
  isSelected,
}: {
  letter: typeLetter;
  onToggle: (id: number) => void;
  isSelected: boolean;
}) {
  return (
    <li className={isSelected ? "selected" : ""}>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            onToggle(letter.id);
          }}
        />
        {letter.subject}
      </label>
    </li>
  );
}
