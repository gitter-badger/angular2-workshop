import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {User} from '../../models/user';
import {UsersStore} from '../../providers/users-store';

@Component({
  selector: 'users-index',
  template: require('./users-index.html'),
  styles: [],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class UsersIndex {
  users: User[] = [];

  constructor(public usersStore: UsersStore) {}

  ngOnInit() {
    this.usersStore.getList()
      .subscribe((users: User[]) => this.users = users);
  }

  routerOnActivate(): boolean {
    return this.usersStore.api.isAuthenticated();
  }
}