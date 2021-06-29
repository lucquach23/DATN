import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisPageComponent} from './regis-page/regis-page.component'
import {RegisPageGVComponent} from './regis-page-gv/regis-page-gv.component';
import { FileNotFoundComponent } from './shared/file-not-found/file-not-found.component';
import { RoleGuard } from './lib/auth.guard';
import { Role } from './models/role';
import { AuthGuard } from './lib/auth.guard';
import { Page404Component } from './page404/page404.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    // path: 'register-sv',component:RegisPageComponent ,
    // canActivate: [AuthGuard],
    // data: { roles: [Role.Sv] }

    path: 'register-sv',
    loadChildren: () => import('./regis-page/regis-page.module').then((m) => m.RegisPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Sv] },

  },
  // {
  //   path: 'ctdt',component:CtdtComponent ,
  //   canActivate: [AuthGuard],
  //   data: { roles: [Role.Sv] }
  // },
  {
    path: 'register-gv',component:RegisPageGVComponent,
    canActivate: [AuthGuard],
    //data: { roles: [Role.Gv] }

  },
  {
    path: 'admin',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] },
  },
  {
    path: 'trang-khong-ton-tai',
    component:Page404Component
  },
  {
    path: '**',
    component: FileNotFoundComponent,
  }, 
];
@NgModule({
  //imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
