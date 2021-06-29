import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  {ExportService} from '../../../_services/export.service';
import {QuanTriAPI} from '../../../api-service/quantriapi';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-hocphan',
  templateUrl: './hocphan.component.html',
  styleUrls: ['./hocphan.component.scss'],
  providers:[QuanTriAPI]
})
export class HocphanComponent implements OnInit {

  constructor(private _api:QuanTriAPI,private _http:HttpClient,private ex:ExportService) { }

  public showtb=false;
  ngOnInit(): void {
   
  }
  public show_datatheolop=false;
  public show_datatheomasv=false;
  public ttl;
  public ttdssv;
  public showrong=false;
  getFormattedDate(date:any) {
    var datePipe = new DatePipe("en-US");
    date = datePipe.transform(date, 'dd/MM/yyyy');
    return date;
  }
  TimKiemLop(){
    this.show_datatheomasv=false;
    var ml=$('#ipSearch').val();
    var ki=$('#ipKi').val();
    if(ml==''||ki=='')
    {
      this.show_datatheolop=true;
      this.showtb=false;
     this.showrong=true;
    }else{
      this.showrong=false;
      this.show_datatheolop=true;
      this.showtb=true;
      this._api.LayTTLop(ml).subscribe((res:any)=>{
        this.ttl=res;
      })
      this._api.LayDSSVTheoMaLopChuyenNganh(ki,ml).subscribe((res:any)=>{
        this.ttdssv=res;
        this.ttdssv.sort((a, b)=> (this.parseName(a.tenSinhVien) > this.parseName(b.tenSinhVien) ? 1 : -1));
        return this.ttdssv.map((item)=> item.tenSinhVien).join("");
      })
    }
    //console.log(ml)
    // this.showtb=true;
    // this._api.LayTTLop
  }
  
  TaiXuongDSSV()
  {
    this.ex.exportExcel(this.ttdssv,'data');
  }
   parseName(input) {
    var fullName = input.split(' ');
    return   fullName[fullName.length - 1];
  }
  public dshpsv;
  public showtbmsvtrong=false;
  public showdtcua1sv=false;
  Showttsv(tt,masv){
   var hk=$('#ipKi').val();
    
    this.show_datatheolop=false;
    if(masv=='')
    {
      $('#datatheomasv').empty();
      $('#datatheomasv').append(`Mã sinh viên trống`);
    }else{
      this._api.LayDSLHPSV(masv).subscribe((res:any)=>{
        if(res.length==0)
        {
          this.show_datatheomasv=true;
          this.showtbmsvtrong=true;
          this.showdtcua1sv=false;
        }else{
          this.show_datatheomasv=true;
          this.showdtcua1sv=true;
          this.showtbmsvtrong=false;
          if(tt=='1ki'){
           
            this.dshpsv=res.filter((el) => {
              return el.hocKi==hk;
            });
            
          }else{
            
            this.dshpsv=res;
          }
          
         
        }
        
      })
    }
  }
  checkDiem(x){
    if(x==0)return'Chưa hoàn thành';
    else return x;
  }
  TaiXuongDSHPSV(){
    this.ex.exportExcel(this.dshpsv,'data');
  }
}