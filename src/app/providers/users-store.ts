import {Injectable} from 'angular2/core';
import {RequestMethod, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Api} from './api';

import {User} from '../models/user';

@Injectable()
export class UsersStore {
  constructor(public api: Api) {}

  getList(): Observable<User[]> {
    return this.api.request(RequestMethod.Get, '/users')
      .map((res: Response) => {
        return res.json().map((object: any) => new User(object));
      });
  }

  getOne(id: number): Observable<User> {
    return this.api.request(RequestMethod.Get, `/users/${id}`)
      .map((res: Response) => {
        return new User(res.json());
      });
  }

  update(user: User): Observable<User> {
    return this.api.request(RequestMethod.Put, `/users/${user.id}`, {body: user})
      .map((res: Response) => {
        return new User(res.json());
      });
  }
}
