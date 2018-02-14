import {Component, NgModule} from '@angular/core';
import {msg} from '../lib/file';

@Component({
  selector: 'repro-app',
  template: `
    <div>Hello {{ name }}</div>
    <input type="text" [value]="name" (input)="name = $event.target.value"/>
  `
})
export class ReproComponent {
  name: string = msg;
}
