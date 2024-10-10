import SearchButton from "./24/SearchButton.jsx";
import SearchInput from "./24/SearchInput.jsx";
import { useRef } from "react";

export default function Page24() {
  const ref = useRef(null);
  return (
    <>
      <nav>
        <SearchButton
          onClick={() => {
            ref.current.focus();
          }}
        />
      </nav>
      <SearchInput ref={ref} />
    </>
  );
}
