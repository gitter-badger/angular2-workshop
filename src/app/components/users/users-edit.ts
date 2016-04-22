import {Component} from 'angular2/core';
import {Router, RouteParams} from  'angular2/router';
import {Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';

import {User} from '../../models/user';
import {CustomValidators} from '../../providers/custom-validators';
import {UsersStore} from '../../providers/users-store';
import {Field} from '../ui/field';

@Component({
  selector: 'users-edit',
  template: require('./users-edit.html'),
  styles: [],
  providers: [],
  directives: [Field, FORM_DIRECTIVES],
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
    this.usersStore.getOne(Number(this.routeParams.get('id')))
      .subscribe((user: User) => {
        this.user = user;
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
      });
  }

  onSubmit() {
    Object.assign(this.user, this.userForm.value);
    this.usersStore.update(this.user)
      .subscribe((user: User) => {
        // this.router.navigate(['/UsersIndex']);
      });
  }
}
