import { useState } from "react";

export default function EditProfile() {
  const [isEditting, setIsEditting] = useState(false);
  const [firstName, setFirstName] = useState("Jane");
  const [lastName, setLastName] = useState("Jacobs");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsEditting(!isEditting);
      }}
    >
      <label>
        First name:
        {isEditting ? (
          <input
            value={firstName}
            onChange={(e) => {
              e.preventDefault;
              setFirstName(e.target.value);
            }}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <br />
      <label>
        Last name:
        {isEditting ? (
          <input
            value={lastName}
            onChange={(e) => {
              e.preventDefault;
              setLastName(e.target.value);
            }}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <br />
      <button type="submit">{isEditting ? "Save" : "Edit"} Profile</button>
      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
}

// editting という状態を管理するための useState を追加
// First name と Last nameの入力値を管理するための変数を追加
// 「Edit Profile」ボタンをクリックすると、First name と Last name の入力欄が表示され、ボタンのテキストが Save に変わる
// 「Save」ボタンをクリックすると、First name と Last name の入力値が更新され、ボタンのテキストが Edit Profile に変わる
// First name と Last name の入力値が更新されると、それを表示する
// function EditProfile() {
//   const [editting, setEditting] = useState(false);
//   const [firstName, setFirstName] = useState('Jane');
//   const [lastName, setLastName] = useState('Jacobs');
//   return (
//     <form>
//       <label>
//         First name:
//         <b>{firstName}</b>
//         <input value={firstName} onChange={(e) => setFirstName(e.target.value)} disabled={!editting}/>
//       </label>
//       <label>
//         Last name:
//         <b>{lastName}</b>
//         <input value={lastName} onChange={(e) => setLastName(e.target.value)} disabled={!editting}/>
//       </label>
//       <button type="submit" onClick={() => setEditting(!editting)}>
//         {editting ? 'Save' : 'Edit Profile'}
//       </button>
//       <p>
//         <i>Hello, {firstName} {lastName}!</i>
//       </p>
//     </form>
//   );
// }
