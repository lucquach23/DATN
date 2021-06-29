import { NgModule }      from '@angular/core';
import {RouterModule} from '@angular/router';
import { LopmoComponent }   from './lopmo/lopmo.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({

  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'd-s-lop-hoc-phan',
        component: LopmoComponent,
      },
  ]),
  
  ],
  declarations: [LopmoComponent],
  bootstrap: [],
  providers: [],
})
export class LopMoModule { }
