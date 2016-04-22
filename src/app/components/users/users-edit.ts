import {Component} from 'angular2/core';
import {Router, RouteParams} from  'angular2/router';
import {Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';

import {User} from '../../models/user';
import {CustomValidators} from '../../providers/custom-validators';
import {UsersStore} from '../../providers/users-store';

@Component({
  selector: 'users-edit',
  template: require('./users-edit.html'),
  styles: [],
  providers: [],
  directives: [FORM_DIRECTIVES],
  pipes: []
})
export class UsersEdit {
  user: User;
  userForm: ControlGroup;

  constructor(public usersStore: UsersStore,
              public routeParams: RouteParams,
              public router: Router) {
  }

  ngOnInit() {
    this.user = this.usersStore.getOne(Number(this.routeParams.get('id')));
    this.userForm = new ControlGroup({
      email: new Control(
        this.user.email,
        Validators.compose([Validators.required, CustomValidators.emailFormat])
      ),
      password: new Control(
        this.user.password,
        Validators.compose([Validators.required, Validators.minLength(6)])
      )
    });
  }

  onSubmit() {
    this.user = Object.assign(this.user, this.userForm.value);
    // this.router.navigate(['/UsersIndex']);
  }
}
