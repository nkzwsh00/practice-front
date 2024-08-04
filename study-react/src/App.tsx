import { useState } from "react";

type FieldProps = {
  label: string;
};

const App = (): JSX.Element => {
  const [reverse, setReverse] = useState<boolean>(false);
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={(e) => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  if (reverse) {
    return (
      <>
        <Field key="Last name" label="Last name" />
        <Field key="First name" label="First name" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field key="First name" label="First name" />
        <Field key="Last name" label="Last name" />
        {checkbox}
      </>
    );
  }
};

const Field = ({ label }: FieldProps): JSX.Element => {
  const [text, setText] = useState<string>("");
  return (
    <label>
      {label}:{" "}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={(e) => setText(e.target.value)}
      />
    </label>
  );
};

export default App;
