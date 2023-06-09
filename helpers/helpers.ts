type User = {
  avatar_url: string;
  bio: string;
  blog: string;
  company: null | string;
  created_at: string;
  email: null | string;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: null | boolean;
  html_url: string;
  id: number;
  location: null | string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: null | string;
  type: string;
  updated_at: string;
  url: string;
};

type RepositoryOwner = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  // ... additional properties
};

type Repository = {
  allow_forking: boolean;
  archive_url: string;
  archived: boolean;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  clone_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  created_at: string;
  default_branch: string;
  deployments_url: string;
  description: null | string;
  disabled: boolean;
  downloads_url: string;
  events_url: string;
  fork: boolean;
  forks: number;
  forks_count: number;
  forks_url: string;
  full_name: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  has_discussions: boolean;
  has_downloads: boolean;
  has_issues: boolean;
  has_pages: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  homepage: null | string;
  hooks_url: string;
  html_url: string;
  id: number;
  is_template: boolean;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  language: string;
  languages_url: string;
  license: null | string;
  merges_url: string;
  milestones_url: string;
  mirror_url: null | string;
  name: string;
  node_id: string;
  notifications_url: string;
  open_issues: number;
  open_issues_count: number;
  owner: RepositoryOwner;
  private: boolean;
  pulls_url: string;
  pushed_at: string;
  releases_url: string;
  size: number;
  ssh_url: string;
  stargazers_count: number;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  svn_url: string;
  tags_url: string;
  teams_url: string;
  topics: string[];
  trees_url: string;
  updated_at: string;
  url: string;
  visibility: string;
  watchers: number;
  watchers_count: number;
  web_commit_signoff_required: boolean;
};

export type RepositoriesData = {
  id: number;
  name: string;
  url: string;
  stars: number;
  forks: number;
};

export type UserData = {
  id: number;
  name: string;
  login: string;
  url: string;
  bio: string;
};

export const filterUserData = (user: User): UserData => {
  return {
    id: user.id,
    name: user.name,
    login: user.login,
    url: user.avatar_url,
    bio: user.bio,
  };
};

export const filterRepositories = (
  repositories: Repository[]
): RepositoriesData[] => {
  return repositories.map((repository) => {
    return {
      id: repository.id,
      name: repository.name,
      url: repository.html_url,
      stars: repository.stargazers_count,
      forks: repository.forks,
    };
  });
};

// this function should return the repositories from the github api
export const getRepositories = async (
  username: string
): Promise<RepositoriesData[] | []> => {
  const repositories = await fetch(
    `https://api.github.com/users/${username}/repos`
  )
    .then((response) => response)
    .then((data) => data.json())
    .catch((error) => {
      console.log(error);
    });

  let repos: [] | RepositoriesData[] = [];

  if (repositories && repositories.length > 0) {
    repos = filterRepositories(repositories);
  }

  return repos;
};

// this function should return the user data from the github api
export const getUserData = async (
  username: string
): Promise<UserData | null> => {
  const user = await fetch(`https://api.github.com/users/${username}`)
    .then((response) => response)
    .then((data) => data.json())
    .catch((error) => {
      console.log(error);
    });

  let userData: null | UserData = null;
  if (user && user.id) {
    userData = filterUserData(user);
  }

  return userData;
};
