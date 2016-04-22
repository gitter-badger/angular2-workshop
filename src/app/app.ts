import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import '../styles/app.scss';

import {UsersIndex} from './components/users/users-index';
import {UsersEdit} from './components/users/users-edit';
import {UsersStore} from './providers/users-store';

@Component({
  selector: 'app',
  providers: [UsersStore, FORM_PROVIDERS],
  directives: [ROUTER_DIRECTIVES],
  pipes: [],
  styles: [],
  template: require('./app.html')
})
@RouteConfig([
  {path: '/users', component: UsersIndex, name: 'UsersIndex', useAsDefault: true},
  {path: '/users/:id', component: UsersEdit, name: 'UsersEdit'}
])
export class App {
}
