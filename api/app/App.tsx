import { useState } from "react";
import { Octokit } from "octokit";
import { GITHUB_TOKEN } from "./config";
import { RepoData, CommitData } from "./types";

const octokit = new Octokit({ auth: GITHUB_TOKEN });

export default function GitHubDataFetcher() {
  const [repoData, setRepoData] = useState<RepoData | null>(null);
  const [commits, setCommits] = useState<CommitData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRepositoryData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data: repoData } = await octokit.rest.repos.get({
        owner: "nkzwsh00",
        repo: "practice-front",
      });

      const { data: commits } = await octokit.rest.repos.listCommits({
        owner: "nkzwsh00",
        repo: "practice-front",
        per_page: 5,
      });

      setRepoData(repoData);
      setCommits(commits);
    } catch (error) {
      setError("データの取得中にエラーが発生しました。");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="border w-full max-w-2xl mx-auto">
        <div>
          <h1>GitHub リポジトリデータ</h1>
          <h2>nkzwsh00/practice-front リポジトリの情報を表示します</h2>
        </div>
        <div>
          <button onClick={fetchRepositoryData} disabled={isLoading}>
            {isLoading ? "データを取得中..." : "データを取得"}
          </button>

          {error && <p className="text-red-500 mt-4">{error}</p>}

          {repoData && (
            <div className="mt-4">
              <h2 className="text-xl font-bold">{repoData.name}</h2>
              <p>{repoData.description}</p>
              <p>スター数: {repoData.stargazers_count}</p>
            </div>
          )}

          {commits.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">最新のコミット:</h3>
              <ul className="list-disc list-inside">
                {commits.map((commit) => (
                  <li key={commit.sha}>
                    {commit.commit.message} ({commit.sha.substring(0, 7)})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
