
import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { ReproModule } from './repro';

@Component({
  selector: 'app-component',
  template: ''
})
export class BootstrapComponent {}

@NgModule({
  imports: [BrowserModule, ReproModule],
  declarations: [BootstrapComponent],
  bootstrap: [BootstrapComponent],
})
export class AppModule {}
