// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { HttpClientModule } from '@angular/common/http';
// import { RegisPageComponent } from './regis-page/regis-page.component';
// import { RegisPageGVComponent } from './regis-page-gv/regis-page-gv.component';
// import { FormsModule } from '@angular/forms';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { ErrorInterceptor } from './lib/error.interceptor';
// import { JwtInterceptor } from './lib/jwt.interceptor';
// import { Page404Component } from './page404/page404.component';
// import { SearchPipe } from './search.pipe';
// import {MainModule} from '../app/main/main.module'
// import { CommonModule } from '@angular/common';
// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     RegisPageComponent,
//     RegisPageGVComponent,
//     Page404Component,
//     SearchPipe  
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     BrowserAnimationsModule,
//     ReactiveFormsModule,
//     AppRoutingModule,
//     FormsModule,
//     MainModule,
//     CommonModule
//   ],
//   providers: [
//     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
//     { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
// ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RegisPageComponent } from './regis-page/regis-page.component';
import { RegisPageGVComponent } from './regis-page-gv/regis-page-gv.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './lib/error.interceptor';
import { JwtInterceptor } from './lib/jwt.interceptor';
import { Page404Component } from './page404/page404.component';
import { SearchFilterPipe } from './search.pipe';
import {TableModule} from 'primeng/table';
import * as $ from "jquery";
import { Pipe, PipeTransform } from '@angular/core';
import {NguoiDungAPI} from './api-service/nguoidungapi'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisPageComponent,
    RegisPageGVComponent,
    Page404Component,
    SearchFilterPipe,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[SearchFilterPipe]
  ,
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
],
  bootstrap: [AppComponent]
})
export class AppModule { }