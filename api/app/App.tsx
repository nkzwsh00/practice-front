function App() {
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
      <button onClick={() => fetchUserInfo("js-primer-example")}>
        Get user info
      </button>
    </>
  );
}

export default App;
