import { Component, Injector, OnInit } from '@angular/core';
import { AuthenticationService } from '../lib/authentication.service';
import 'rxjs/add/operator/takeUntil';
import {NguoiDungAPI} from '../api-service/nguoidungapi';

@Component({
  selector: 'app-regis-page',
  templateUrl: './regis-page.component.html',
  styleUrls: ['./regis-page.component.css'],
  providers:[NguoiDungAPI]
})

export class RegisPageComponent implements OnInit {
  
  constructor(private authenticationService: AuthenticationService,private _api:NguoiDungAPI){}
 
  public masv:string=this.authenticationService.userValue.username;
  public tensv:string;
  
  ngOnInit() {
    this._api.LayTTSV(this.masv).subscribe((res:any)=>{
      //console.log(res);
      this.tensv=res[0]['tenSinhVien'];
      //console.log(this.tensv);
    });

  }

  logout() {
    this.authenticationService.logout();
  } 
 

}
