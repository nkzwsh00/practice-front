import { FC, useState } from "react";

export const Ajax: FC = () => {
  const [userInfo, setUserInfo] = useState<userInfo | null>(null);

  const handleFetchUserInfo = () => {
    fetchUserInfo("nkzwsh00").then((data) => setUserInfo(data));
  };

  return (
    <div className="flex flex-col items-center p-4 gap-6">
      <div className="flex justify-center items-center">
        <p>Ajax通信で値を取得し、画面に描画する。</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleFetchUserInfo}
        >
          get
        </button>
      </div>
      {userInfo && (
        <div className="text-center flex gap-6 border border-cyan-700 px-8 py-4">
          <img
            width={240}
            height={240}
            src={userInfo.avatar_url}
            alt="avatar"
            className="rounded-full"
          />
          <div className="flex flex-col justify-center items-start gap-2">
            <p>Name: {userInfo.name}</p>
            <p>Login: {userInfo.login}</p>
            <p>Location: {userInfo.location}</p>
            <p>Public Repos: {userInfo.public_repos}</p>
          </div>
        </div>
      )}
    </div>
  );
};

type userInfo = {
  name: string;
  login: string;
  avatar_url: string;
  location: string;
  public_repos: number;
};

const fetchUserInfo = async (userId: string): Promise<userInfo> => {
  const response = await fetch(
    `https://api.github.com/users/${encodeURIComponent(userId)}`
  );
  if (!response.ok) {
    throw new Error("エラーレスポンス");
  }
  return response.json();
};
