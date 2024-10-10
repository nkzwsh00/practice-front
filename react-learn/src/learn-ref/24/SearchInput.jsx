import { forwardRef } from "react";

export default forwardRef(function SearchInput(ref) {
  return <input ref={ref} placeholder="Looking for something?" />;
});
