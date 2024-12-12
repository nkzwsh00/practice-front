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

  return (
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
        認証
      </button>
    </form>
  );
};
