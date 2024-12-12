import React, { useState } from "react";

interface AuthProps {
  onAuth: (token: string) => void;
}

export const Auth: React.FC<AuthProps> = ({ onAuth }) => {
  const [token, setToken] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAuth(token);
  };

  const handleAuthRequest = () => {
    const clientId = "YOUR_CLIENT_ID"; // あなたのクライアントIDに置き換えてください
    const redirectUri = encodeURIComponent("http://localhost:5173/callback"); // あなたのリダイレクトURIに置き換えてください
    const scope = "account:characters"; // 必要なスコープを指定
    const state = Math.random().toString(36).substring(7); // ランダムな文字列を生成

    // stateをローカルストレージに保存（CSRF対策）
    localStorage.setItem("oauth_state", state);

    const authUrl = `https://www.pathofexile.com/oauth/authorize?client_id=${clientId}&response_type=code&scope=${scope}&state=${state}&redirect_uri=${redirectUri}`;

    window.location.href = authUrl;
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handleAuthRequest}
        className="w-full p-2 bg-green-500 text-white rounded"
      >
        Path of Exileで認証
      </button>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="アクセストークンを入力"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          トークンで認証
        </button>
      </form>
    </div>
  );
};
