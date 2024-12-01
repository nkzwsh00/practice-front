import { useState } from "react";

type UserInfo = {
  name: string;
  login: string;
  avatar_url: string;
  location: string;
  public_repos: number;
};

const defaultUserInfo: UserInfo = {
  name: "",
  login: "",
  avatar_url: "",
  location: "",
  public_repos: 0,
};

function App() {
  const [userInfo, setUserInfo] = useState(defaultUserInfo);
  function fetchUserInfo(userId: string) {
    fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
      .then((response) => {
        console.log(response.status);
        // エラーレスポンスが返されたことを検知する
        if (!response.ok) {
          console.error("エラーレスポンス", response);
        } else {
          return response.json().then((userInfo) => {
            console.log(userInfo);
            setUserInfo(userInfo);
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <h1 className="text-3xl text-red-600 font-bold underline">
        Github User Info
      </h1>
      <button onClick={() => fetchUserInfo("nkzwsh00")}>Get user info</button>
      {userInfo.name !== "" && (
        <div>
          <h4>
            {userInfo.name} (@{userInfo.login})
          </h4>
          <img src={userInfo.avatar_url} alt={userInfo.login} height="100" />
          <dl>
            <dt>Location</dt>
            <dd>{userInfo.location}</dd>
            <dt>Repositories</dt>
            <dd>{userInfo.public_repos}</dd>
          </dl>
        </div>
      )}
    </>
  );
}

export default App;
