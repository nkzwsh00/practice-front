import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Auth } from "./components/Auth";
import { Callback } from "./components/Callback";
import { CharacterList } from "./components/CharacterList";

const queryClient = new QueryClient();

function App() {
  const [token, setToken] = useState<string | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Path of Exile API アプリ</h1>
          <Routes>
            <Route path="/callback" element={<Callback onAuth={setToken} />} />
            <Route
              path="/"
              element={
                !token ? (
                  <Auth onAuth={setToken} />
                ) : (
                  <CharacterList token={token} />
                )
              }
            />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
