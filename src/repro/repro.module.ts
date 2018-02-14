import {NgModule} from '@angular/core';

import {ReproComponent} from './repro.component';
import { HelloWorldModule } from '../hello-world';

@NgModule({
  imports: [HelloWorldModule],
  declarations: [ReproComponent],
  exports: [ReproComponent]
})
export class ReproModule {}