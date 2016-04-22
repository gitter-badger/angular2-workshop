import {Component} from 'angular2/core';

import {User} from '../../models/user';
import {UsersStore} from '../../providers/users-store';

@Component({
  selector: 'users-index',
  template: require('./users-index.html'),
  styles: [],
  providers: [],
  directives: [],
  pipes: []
})
export class UsersIndex {
  users: User[] = [];

  constructor(public usersStore: UsersStore) {
    this.users = usersStore.getList();
  }
}
