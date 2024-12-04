import { useRef } from "react";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

export default function Page() {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <nav>
        <SearchButton onClick={handleClick} />
      </nav>
      <SearchInput ref={inputRef} />
    </>
  );
}
