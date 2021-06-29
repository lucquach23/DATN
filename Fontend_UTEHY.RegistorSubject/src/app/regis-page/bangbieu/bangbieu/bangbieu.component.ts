import { Component, OnInit } from '@angular/core';
import  {ExportService} from '../../../_services/export.service';
import {NguoiDungAPI}from '../../../api-service/nguoidungapi'
import { AuthenticationService } from '../../../lib/authentication.service';
@Component({
  selector: 'app-bangbieu',
  templateUrl: './bangbieu.component.html',
  styleUrls: ['./bangbieu.component.css']
})
export class BangbieuComponent implements OnInit {

  constructor(private _api: NguoiDungAPI,private _auth: AuthenticationService,private ex:ExportService) { }
  public masv:string=this._auth.userValue.username;
  ngOnInit(): void {
    this.BangDiem();
    setTimeout(function(){ 
      var h= $('#datakhung').height();
      $('#navbar').css('height',`${h+200}px`);
    }, 2000);
  }
  public bd:any;
  public tstc;
  BangDiem(){
    this._api.XemTienDoHoanThanhCT(this.masv).subscribe((res:any)=>{
      this.bd=res;
      res.reduce((sum,val)=>{
        return this.tstc= sum+val.soTinChi;
      },0)
    })
  }
  ConvertScore(d){
    var d4;
    if(d==null || d==undefined) d4=0;
    else{
      if (d>=9.0 || d<=10){
        d4='A+'
      }else if(d>=8.5 || d<=8.9)
      {
        d4='A'
      }else if(d>=8.0 || d<=8.4)
      {
        d4='B+'
      }else if(d>=7.0 || d<=7.9)
      {
        d4='B'
      }else if(d>=6.5 || d<=6.9)
      {
        d4='C+'
      }else if(d>=5.5 || d<=6.4)
      {
        d4='C'
      }else if(d>=5.0 || d<=5.4)
      {
        d4='D+'
      }else if(d>=4.0 || d<=4.9)
      {
        d4='D'
      }else{
        d4='F';
      }
    }
    return d4;
  }
  TaiXuong(){
    this.ex.exportExcel(this.bd,'data');
  }
  
}
