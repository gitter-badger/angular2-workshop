import {Component} from 'angular2/core';
import {Router} from  'angular2/router';
import {Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';

import {CustomValidators} from '../../providers/custom-validators';
import {Field} from '../ui/field';

@Component({
  selector: 'login',
  template: require('./login.html'),
  styles: [],
  providers: [],
  directives: [Field, FORM_DIRECTIVES],
  pipes: []
})
export class Login {
  userForm: ControlGroup;

  constructor(public router: Router) {
    this.userForm = new ControlGroup({
      email: new Control(
        '',
        Validators.compose([Validators.required, CustomValidators.emailFormat])
      ),
      password: new Control(
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      )
    });
  }

  onSubmit() {
    localStorage.setItem('token', '123token');
    this.router.parent.navigate(['/UsersIndex']);
  }
}
