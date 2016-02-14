declare module GithubApi {
    interface OAuth {
        token: string,
        auth: string
    }
    class Repo {
        show(next: (err: string, repo: string) => void): void;
        listBranches(callback: (err: string, branches: string[]) => void): void;
        read(branch: string, path: string, callback: (err: string, contents: string) => void): void;
    }
}

declare module 'github-api' {
    class Github {
        constructor(oauth: GithubApi.OAuth);
        constructor();
        getRepo(username: string, reponame: string): GithubApi.Repo;
    }
    namespace Github {}
    export = Github;
}