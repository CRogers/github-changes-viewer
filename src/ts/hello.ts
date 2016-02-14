import * as Github from 'github-api';

const github = new Github({
    token: '9d9c46b7c59fb16202108b50bf0845b184aecea7',
    auth: 'oauth'
});
const repo = github.getRepo('CRogers', 'baconsnake');

function promisify<T>(func: (callback: (err: any, answer: T) => void) => void): Promise<T> {
    return new Promise((resolve, reject) => {
        func((err, answer) => {
            if (err != null) {
                reject(err)
            } else {
                resolve(answer)
            }
        })
    });
}

function partial2<A,B,C,R>(func: (a: A, b: B, c: C) => R, a: A, b: B): (c: C) => R {
    return (c) => func(a, b, c)
}

function read(repo: GithubApi.Repo, branch: string, path: string): Promise<string> {
    return promisify(partial2(repo.read, branch, path))
}

read(repo, 'master', 'readme.md')
    .then((answer) => console.log(answer));