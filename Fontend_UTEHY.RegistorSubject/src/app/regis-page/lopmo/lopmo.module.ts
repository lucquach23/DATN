import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LopmoComponent } from './lopmo/lopmo.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: 'ds-lop-mo',
        component: LopmoComponent,
      },
  ]),
  ]
})
export class LopmoModule { }
