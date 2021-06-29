import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SinhvienComponent } from './sinhvien/sinhvien/sinhvien.component';
import { HocphanComponent } from './hocphan/hocphan/hocphan.component';
import { GiangvienComponent } from './giangvien/giangvien/giangvien.component';
import { UnauthorizedComponent } from '../shared/unauthorized/unauthorized.component';
import { FileNotFoundComponent } from '../shared/file-not-found/file-not-found.component';
import { RoleGuard } from '../lib/auth.guard';
import { Role } from '../models/role';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms';

export const mainRoutes: Routes = [
  {
      path: '', component: MainComponent,
      children: [
          {
              path: '', component: DashboardComponent,
              // canActivate: [RoleGuard],
              // data: { roles: [Role.Admin] },
          },
          {
            path: 'not-found',
            component: FileNotFoundComponent,
          },
          {
            path: 'unauthorized',
            component: UnauthorizedComponent,
          },
          // {
          //     path: 'tim-kiem-giang-vien', 
          //     loadChildren: () => import('./giangvien/giangvien.module').then(m => m.GiangVienModule),
          //     canActivate: [RoleGuard],
          //     data: { roles: [Role.Admin] },
          // },
          {
            path: 'tim-kiem-sinh-vien',  
            loadChildren: () => import('./sinhvien/sinhvien.module').then(m => m.SinhVienModule),
            canActivate: [RoleGuard],
              data: { roles: [Role.Admin] },
        },
          {
            path: 'lop-hoc-phan',  
            loadChildren: () => import('./lopmo/lopmo.module').then(m => m.LopMoModule),
            canActivate: [RoleGuard],
              data: { roles: [Role.Admin] },
        },
          {
              path: 'lop-chuyen-nganh', 
              loadChildren: () => import('./hocphan/hocphan.module').then(m => m.HocPhanModule),
              canActivate: [RoleGuard],
              data: { roles: [Role.Admin] },
          },
          {
            path: 'user23', 
            loadChildren: () => import('./user/user.module').then(m => m.UserModule),
           
        },
      ]
  }
];
@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    MainComponent,
    SinhvienComponent,
    HocphanComponent,
    GiangvienComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class MainModule { }