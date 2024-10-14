import { FC, useState } from "react";

export const Ajax: FC = () => {
  const [userInfo, setUserInfo] = useState<userInfo | null>(null);

  const handleFetchUserInfo = () => {
    fetchUserInfo("nkzwsh00").then((data) => setUserInfo(data));
  };

  return (
    <div>
      <h1>Ajax</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleFetchUserInfo}
      >
        get
      </button>
      {userInfo && (
        <div>
          <p>Name: {userInfo.name}</p>
          <p>Login: {userInfo.login}</p>
          <p>Location: {userInfo.location}</p>
          <p>Public Repos: {userInfo.public_repos}</p>
          <img src={userInfo.avatar_url} alt="avatar" />
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
