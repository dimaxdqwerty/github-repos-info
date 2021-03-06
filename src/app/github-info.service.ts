import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contributor, RepoInfo, User } from './beans';
import { Observable } from 'rxjs';
import repos from 'src/assets/repos.json'

const GITHUB_API = 'https://api.github.com/';
const REPOS_OPERATION = 'repos/';
const USERS_OPERATION = 'users/';

@Injectable({
  providedIn: 'root'
})
export class GithubInfoService {

  reposInfo: Observable<RepoInfo>[] = [];
  typesSet: string[] = [];
  repoTypes: string[] = [];

  constructor(private http: HttpClient) { }

  getReposLenght() {
    return repos.length;
  }

  getTypesSet() {
    let i = 0;
    repos.forEach(repo => {
      if (!this.typesSet.includes(repo.type)) {
        this.typesSet[i] = repo.type;
        i++;
      }
    });
    return this.typesSet;
  }

  getRepoTypes() {
    repos.forEach((repo, i) => {
      this.repoTypes[i] = repo.type;
    });
    return this.repoTypes;
  }

  getReposInfo() {
    repos.forEach((repo, i) => {
      this.reposInfo[i] = this.http.get<RepoInfo>(GITHUB_API + REPOS_OPERATION + repo.owner + '/' + repo.name);
    });
    return this.reposInfo;
  }

  getSpecificRepoInfo(owner: string, name: string) {
    return this.http.get<RepoInfo>(GITHUB_API + REPOS_OPERATION + owner + '/' + name);
  }

  getRepoLanguages(owner: string, name: string) {
    return this.http.get(GITHUB_API + REPOS_OPERATION + owner + '/' + name + '/' + 'languages');
  }

  getRepoContributors(owner: string, name: string) {
    return this.http.get<Contributor[]>(GITHUB_API + REPOS_OPERATION + owner + '/' + name + '/' + 'contributors');
  }

  getUserInfo(name: string) {
    return this.http.get<User>(GITHUB_API + USERS_OPERATION + name);
  }
  
}
