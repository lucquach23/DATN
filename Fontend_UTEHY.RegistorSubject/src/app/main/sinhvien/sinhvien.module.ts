import { NgModule }      from '@angular/core';
import {RouterModule} from '@angular/router';
import { SinhvienComponent }   from './sinhvien/sinhvien.component';


@NgModule({

  imports: [
    RouterModule.forChild([
      {
        path: 'dssv',
        component: SinhvienComponent,
      },
  ]),
  
  ],
  declarations: [],
  bootstrap: [],
  providers: [],
})
export class SinhVienModule { }
