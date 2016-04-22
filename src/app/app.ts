import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import '../styles/app.scss';

import {UsersIndex} from './components/users/users-index';
import {UsersEdit} from './components/users/users-edit';
import {Login} from './components/account/login';
import {Logout} from './components/account/logout';
import {Api} from './providers/api';

@Component({
  selector: 'app',
  providers: [FORM_PROVIDERS],
  directives: [ROUTER_DIRECTIVES],
  pipes: [],
  styles: [],
  template: require('./app.html')
})
@RouteConfig([
  {path: '/users', component: UsersIndex, name: 'UsersIndex', useAsDefault: true},
  {path: '/users/:id', component: UsersEdit, name: 'UsersEdit'},
  {path: '/login', component: Login, name: 'Login'},
  {path: '/logout', component: Logout, name: 'Logout'}
])
export class App {
  constructor(public api: Api) {}
}
