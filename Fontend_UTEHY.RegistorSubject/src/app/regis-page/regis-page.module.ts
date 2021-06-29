import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { RegisPageComponent } from './regis-page.component';
import{BangbieuComponent} from './bangbieu/bangbieu/bangbieu.component'
import{CtdtComponent} from './ctdt/ctdt/ctdt.component'
import{IntroComponent} from './intro/intro.component'
import{LopmoComponent} from './lopmo/lopmo/lopmo.component'
import{MonhocComponent} from './monhoc/monhoc/monhoc.component'
import{ThongtincanhanComponent} from './thongtincanhan/thongtincanhan/thongtincanhan.component'




import { UnauthorizedComponent } from '../shared/unauthorized/unauthorized.component';
import { FileNotFoundComponent } from '../shared/file-not-found/file-not-found.component';
import { RoleGuard } from '../lib/auth.guard';
import { Role } from '../models/role';

import { FormsModule } from '@angular/forms';



export const mainRoutes: Routes = [
  {
      path: '', component: RegisPageComponent,
      children: [
          {
            path: '', component: IntroComponent,
          },
          
          {
              path: 'ctdt', 
              loadChildren: () => import('./ctdt/ctdt.module').then(m => m.CtdtModule),
               canActivate: [RoleGuard],
               data: { roles: [Role.Sv] },
          },
          {
            path: 'lop-mo',  
            loadChildren: () => import('./lopmo/lopmo.module').then(m => m.LopmoModule),
             canActivate: [RoleGuard],
               data: { roles: [Role.Sv] },
        },
          {
            path: 'mon-hoc',  
            loadChildren: () => import('./monhoc/monhoc.module').then(m => m.MonhocModule),
             canActivate: [RoleGuard],
               data: { roles: [Role.Sv] },
        },
          {
              path: 'bang-bieu', 
              loadChildren: () => import('./bangbieu/bangbieu.module').then(m => m.BangbieuModule),
               canActivate: [RoleGuard],
               data: { roles: [Role.Sv] },
          },
          {
            path: 'thong-tin-ca-nhan', 
            loadChildren: () => import('./thongtincanhan/thongtincanhan.module').then(m => m.ThongtincanhanModule),
             canActivate: [RoleGuard],
             data: { roles: [Role.Sv] },
          
        }
           
        //     path: 'user23', 
        //     loadChildren: () => import('./user/user.module').then(m => m.UserModule),
           
        // },
      ]
  }
];
@NgModule({
  declarations: [
    //RegisPageComponent,
     BangbieuComponent,
     CtdtComponent,
     IntroComponent,
     LopmoComponent,
     MonhocComponent,
     ThongtincanhanComponent,
     
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class RegisPageModule { }
