import { Component, OnInit } from '@angular/core';
import {RouterModule} from '@angular/router';
import {NguoiDungAPI}from '../../api-service/nguoidungapi';
import { AuthenticationService } from '../../lib/authentication.service';
import { DatePipe } from '@angular/common';
import {Sv} from '../../sv';
declare var $: any;
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(private _api: NguoiDungAPI,private _auth: AuthenticationService) { }

  ngOnInit(): void {
    // $('#navbar').css('height',`100vh`);
    this.getTongTC();
    this._api.LayTTSV(this.masv).subscribe((res:any)=>{
      this.sv=res;
    });

  }
  public masv:string=this._auth.userValue.username;

  public sumtc;

  public sv;
   validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  validateSDT(sdt) {
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    return vnf_regex.test(String(sdt).toLowerCase());
  }
  getTongTC(){
    this._api.TongSoTinChiDaTichLuy(this.masv).subscribe((res:any)=>{
      console.log(res.length);
      if(res.length==0) this.sumtc=0;
      else this.sumtc=res[0]['tongSoTinChiDaTichLuy'];
    })
  }
  getFormattedDate(date:any) {
    var datePipe = new DatePipe("en-US");
    date = datePipe.transform(date, 'yyyy-MM-dd');
    return date;
  }
  CapNhatSv(){
    var me=this;
    var s=new Sv();
    s.TenSinhVien=$('#ipHoTen').val();
    s.AnhDaiDien='luc.jpg';
    s.Email=$('#ipEmail').val();
    s.GioiTinh=true;
    s.MaLop=$('#ipLop').val();
    s.MaSinhVien=this.masv;
    s.QueQuan=$('#txtAddress').val();
    s.SinhNhat=$('#ipNgaySinh').val();
    s.SoDienThoai=$('#ipSDT').val();

    if(s.TenSinhVien=='') $('#ipHoTen').css('border','1px solid red');
    else if(s.Email==''||me.validateEmail(s.Email)==false) $('#ipEmail').css('border','1px solid red');
    else if(s.QueQuan=='') $('#txtAddress').css('border','1px solid red');
    else if(s.SoDienThoai==''||me.validateSDT(s.SoDienThoai)==false) $('#ipSDT').css('border','1px solid red');
   else{
     this._api.SuaThongTinCaNhan(s).subscribe((res:any)=>{
       me.showAlert(`${res[0]['soBanGhiBiAnhHuong']} bản ghi được cập nhật`,'none');
     })
    
   }
  }
  
  closeAlert(){
    $('#l-alert').css('display','none');
    setTimeout(()=>{
      window.location.reload();
    },2000);
  }
  showAlert(conten:string,btnYes) {
    $('#alert-body').empty();
    $('#alert-body').append(conten);
    $('#l-alert').css('display','block');
    $('#btnYes').css('display',btnYes);
    this.setPosition('alert-content');
   }
   setPosition(element) {
    var elementOffset = $(`#${element}`);
    var height = elementOffset.height();
    var width = elementOffset.width();
    elementOffset.css('top',`calc(19% - ${height/2}px)`);
    elementOffset.css('left',`calc(40% - ${width/2}px)`);
  }

}
