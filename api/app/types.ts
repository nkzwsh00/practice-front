export interface RepoData {
  name: string;
  description: string | null;
  stargazers_count: number;
}

export interface CommitData {
  sha: string;
  commit: {
    message: string;
  };
}
