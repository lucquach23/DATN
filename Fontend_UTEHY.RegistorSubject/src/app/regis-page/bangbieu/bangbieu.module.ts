import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BangbieuComponent } from './bangbieu/bangbieu.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: 'ds-bang-bieu',
        component: BangbieuComponent,
      },
  ]),
  ]
})
export class BangbieuModule { }
