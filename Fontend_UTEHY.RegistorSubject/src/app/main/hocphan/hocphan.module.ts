import { NgModule }      from '@angular/core';
import {RouterModule} from '@angular/router';
import { ExportDirective } from '../../_directives/export.directive';
import { HocphanComponent }   from './hocphan/hocphan.component';


@NgModule({

  imports: [
    
    RouterModule.forChild([
      {
        path: 'd-s-lop-chuyen-nganh',
        component: HocphanComponent,
      },
  ]),
  
  ],
  declarations: [ExportDirective],
  bootstrap: [],
  providers: [],
})
export class HocPhanModule { }
