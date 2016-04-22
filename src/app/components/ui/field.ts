import {Component, Input} from 'angular2/core';
import {ValidatorResult} from '../../providers/custom-validators';

@Component({
  selector: 'field',
  template: `
    <div class="form-group" [ngClass]="{'has-error': errors}">
      <ng-content></ng-content>
			<div class="help-block" *ngIf="errors">
				{{errors | json}}
			</div>
		</div>
  `,
  styles: [],
  providers: [],
  directives: [],
  pipes: []
})
export class Field {
  @Input('errors') errors: ValidatorResult[];
}
