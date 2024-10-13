import { FC } from "react";

export const Ajax: FC = () => {
  return (
    <div>
      <h1>Ajax</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => fetchUserInfo("nkzwsh00")}
      >
        get
      </button>
    </div>
  );
};

const fetchUserInfo = (userId: string): void => {
  // リクエストを作成する
  fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    .then((response) => {
      console.log(response.status);
      // エラーレスポンスが返されたことを検知する
      if (!response.ok) {
        console.error("エラーレスポンス", response);
      } else {
        return response.json().then((userInfo) => {
          console.log(userInfo);
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
