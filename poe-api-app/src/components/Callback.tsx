import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface CallbackProps {
  onAuth: (token: string) => void;
}

export const Callback: React.FC<CallbackProps> = ({ onAuth }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const state = urlParams.get("state");
    const storedState = localStorage.getItem("oauth_state");

    if (state !== storedState) {
      console.error("State mismatch. Possible CSRF attack.");
      navigate("/");
      return;
    }

    if (code) {
      exchangeCodeForToken(code);
    }
  }, [navigate, onAuth]);

  const exchangeCodeForToken = async (code: string) => {
    try {
      // 注意: このリクエストは通常バックエンドで行うべきです
      const response = await axios.post(
        "https://www.pathofexile.com/oauth/token",
        {
          client_id: "YOUR_CLIENT_ID",
          client_secret: "YOUR_CLIENT_SECRET",
          grant_type: "authorization_code",
          code: code,
          redirect_uri: "http://localhost:5173/callback",
        }
      );

      const accessToken = response.data.access_token;
      onAuth(accessToken);
      navigate("/");
    } catch (error) {
      console.error("Error exchanging code for token:", error);
      navigate("/");
    }
  };

  return <div>認証中...</div>;
};
