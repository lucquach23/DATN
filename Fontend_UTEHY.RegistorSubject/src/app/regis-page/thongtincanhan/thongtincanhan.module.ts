import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThongtincanhanComponent } from './thongtincanhan/thongtincanhan.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: 'ttcn',
        component: ThongtincanhanComponent,
      },
  ]),
  ]
})
export class ThongtincanhanModule { }
