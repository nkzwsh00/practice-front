import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Auth } from "./components/Auth";
import { CharacterList } from "./components/CharacterList";

const queryClient = new QueryClient();

function App() {
  const [token, setToken] = useState<string | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Path of Exile API アプリ</h1>
        {!token ? <Auth onAuth={setToken} /> : <CharacterList token={token} />}
      </div>
    </QueryClientProvider>
  );
}

export default App;
