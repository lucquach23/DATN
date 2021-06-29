import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtdtComponent } from './ctdt/ctdt.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: 'ds-ctdt',
        component: CtdtComponent,
      },
  ]),
  ]
})
export class CtdtModule { }
