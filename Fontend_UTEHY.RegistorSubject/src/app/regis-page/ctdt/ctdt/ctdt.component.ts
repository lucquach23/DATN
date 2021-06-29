import { Component, OnInit } from '@angular/core';
import {NguoiDungAPI}from '../../../api-service/nguoidungapi'
import { AuthenticationService } from '../../../lib/authentication.service';
import { DatePipe } from '@angular/common';

declare var $: any;
@Component({
  selector: 'app-ctdt',
  templateUrl: './ctdt.component.html',
  styleUrls: ['./ctdt.component.css']
})

export class CtdtComponent implements OnInit {


  constructor(private _api: NguoiDungAPI,private _auth: AuthenticationService) { }
  ngOnInit(): void {
    $('#navbar').css('height',`100vh`);
    this.XemCTDT();
    this.getTongTC();
  }
  public masv:string=this._auth.userValue.username;
  
  public ctdt:any;
 
  public sumtc:number;

  public khungct:any;

  public chitiethp:any;
  


  XemKhungChuongTrinh(){
     this._api.XemKhungChuongTrinh(this.masv).subscribe((res:any)=>{
       this.khungct=res;
       console.log(this.khungct)
     })
  }

  getTongTC(){
    this._api.TongSoTinChiDaTichLuy(this.masv).subscribe((res:any)=>{
      console.log(res.length);
      if(res.length==0) this.sumtc=0;
      else this.sumtc=res[0]['tongSoTinChiDaTichLuy'];
    })
  }

  XemCTDT(){
    this._api.XemCTDT(this.masv).subscribe((res:any)=>{
      this.ctdt=res;
      
     // console.log(this.ctdt)
    })
  }
 
  public showctdt(){
    $('#navbar').css('height',`100vh`);
    $('#ctdt').addClass('content-top-item-active');
    $('#khungctdt').removeClass('content-top-item-active');
    $('#content-ctdt').css('display','block');
    $('#content-khungctdt').css('display','none');
    setTimeout(function(){ 
      $('#navbar').css('height',`100vh`);
    }, 1500);
  }

  public showkhung(){
    this.XemKhungChuongTrinh();
    $('#khungctdt').addClass('content-top-item-active');
    $('#ctdt').removeClass('content-top-item-active');
    $('#content-ctdt').css('display','none');
    $('#content-khungctdt').css('display','block');
    setTimeout(function(){ 
      var h= $('#datakhung').height();
      $('#navbar').css('height',`${h+200}px`);
    }, 2000);
   
    
  }
 
  getFormattedDate(date:any) {
    var datePipe = new DatePipe("en-US");
    date = datePipe.transform(date, 'dd/MM/yyyy');
    return date;
  }

   setPosition(element) {
   // var elementOffset = document.getElementsByClassName(element)[0];
    var elementOffset=$(`#${element}`);
    var height = elementOffset.height();
    var width = elementOffset.width();
    
    var h=$(window).height();
    //var w=$(window).width();

    elementOffset.css('top',`calc(${h-(h-50)}% - ${height/2}px)`);
    elementOffset.css('left',`calc(50% - ${width/2}px)`);
  
  }

  showDialog(id){
    $('#datachitiethp').empty();
    $('#dialog-add').css('display','block');
    this.setPosition('dc');
    this._api.DiemMonHoc(this.masv,id).subscribe((res:any)=>{
      this.chitiethp=res;
      $('#datachitiethp').append(`<table >
    <tbody>
        <tr style="line-height: 30px;">
            <th>Mã học phần:</th>
            <td style="padding-left: 5px;">${this.chitiethp[0]['maMonHoc']}</td>
            <td><b style="margin-left: 50px;">Giảng viên giảng dạy:</b></td>
            <td style="padding-left: 5px;">${this.chitiethp[0]['tenGiangVien']}</td>
        </tr>
        <tr style="line-height: 30px;">
            <th>Tên học phần</th>
            <td style="padding-left: 5px;">${this.chitiethp[0]['tenMonHoc']}</td>
            <td><b style="margin-left: 50px;">Khoa:</b></td>
            <td style="padding-left: 5px;">${this.chitiethp[0]['tenKhoa']}</td>
        </tr>

        <tr style="line-height: 30px;">
            <th>Số tín chỉ lí thuyết</th>
            <td style="padding-left: 5px;">${this.chitiethp[0]['soTinChiLiThuyet']}</td>
            <td><b style="margin-left: 50px;">Điểm tổng kết:</b></td>
            <td style="padding-left: 5px;">${this.chitiethp[0]['diemTongKet']}</td>
        </tr>
        <tr style="line-height: 30px;">
            <th>Số tín chỉ thực hành</th>
            <td style="padding-left: 5px;">${this.chitiethp[0]['soTinChiThucHanh']}</td>
            <td><b style="margin-left: 50px;">Điểm chữ</b></td>
            <td style="padding-left: 5px;">${this.ConvertScore(this.chitiethp[0]['diemTongKet'])}</td>
        </tr>
        <tr style="line-height: 30px;">
            <th>Tổng số tín chỉ</th>
            <td style="padding-left: 5px;">${this.chitiethp[0]['soTinChi']}</td>
        </tr>
    </tbody>
</table>
<div style="margin-top: 5px;">
    <span><b>Giới thiệu chung</b></span>
    <div>
        ${this.chitiethp[0]['khaiQuatChung']}
    </div>
</div>`)
    });

  }

  closeDialog(){
    $('#dialog-add').css('display','none');
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
}
