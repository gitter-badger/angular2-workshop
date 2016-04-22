import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
  selector: 'logout',
  template: ''
})
export class Logout {
  constructor(public router: Router) {
    localStorage.setItem('token', '');
    this.router.parent.navigate(['/Login']);
  }
}
