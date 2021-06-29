import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonhocComponent } from './monhoc/monhoc.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: 'ds-mon-hoc',
        component: MonhocComponent,
      },
  ]),
  ]
})
export class MonhocModule { }
