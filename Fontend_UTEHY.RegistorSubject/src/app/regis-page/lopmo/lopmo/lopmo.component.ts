import { Component, OnInit } from '@angular/core';
//import  from 'jquery';
import {NguoiDungAPI}from '../../../api-service/nguoidungapi'
import { AuthenticationService } from '../../../lib/authentication.service';
import { DatePipe } from '@angular/common';
import  {ExportService} from '../../../_services/export.service';
declare var $: any;

@Component({
  selector: 'app-lopmo',
  templateUrl: './lopmo.component.html',
  styleUrls: ['./lopmo.component.css']
})
export class LopmoComponent implements OnInit {

  constructor(private ex:ExportService, private _api: NguoiDungAPI,private _auth: AuthenticationService) { }
 
  ngOnInit(): void {
    this.showdslm();
    this.LayDSLopMonHocTheoKi();
    $('#navbar').css('height',`100vh`);
    this.XemKhungChuongTrinh();
    this.DSLopMonHocCua1SV();
  }
  TaiXuong(){
    this.ex.exportExcel(this.danh_sach_hp_da_dang_ki,'data');
  }

  public masv:string=this._auth.userValue.username;

  public tong_so_hp_ddk;
  

  public arrDsLopMoBB; //danh sách lớp mở của các học phần bắt buộc

  public arrDsLoMoTuChon;//danh sách lớp mở các học phần tự chọn bổ trợ

  public arrDsLopMoChuyenNganh; // danh sách các học phần tự chọn chuyên ngành

  public maxTCBoTro:any; // số tín chỉ max đăng kí học phần tự chọn bổ trợ

  public maxTCChuyenNganh:any; // số tín chỉ max đăng kí học phần tự chọn chuyên ngành

  public ddk:any//số tín chỉ đã đăng kí
  
  public chitiethp:any;

  public danh_sach_hp_da_dang_ki;

  XoaLopDK(maLopMonHoc){
    var me=this;
    this.showAlert('Bạn có chắc chắn xóa lớp học phần này?','block');
    $('#btnYes').on('click', function() {
      me._api.XoaLopMonHocDaDangKi(maLopMonHoc,me.masv).subscribe((res)=>{
      me.showAlert(`${res[0]['soBanGhiBiAnhHuong']} lớp môn học đã bị xóa!`,'none');
    })
  });

  }

  DSLopMonHocCua1SV(){
    this._api.DSLopMonHocCua1SV(this.LayHocKiTuMaSV(),this.masv).subscribe((res:any)=>{
      if(res.length==0)
      {
        this.danh_sach_hp_da_dang_ki=0
        this.tong_so_hp_ddk=0
      } 
      else
      {
        this.danh_sach_hp_da_dang_ki=res;
        this.tong_so_hp_ddk=res.reduce((sum,value)=>{
          return sum+value.soTinChi;
        },0)
      }
     
      console.log(this.danh_sach_hp_da_dang_ki);
      console.log(this.tong_so_hp_ddk);
    })
  }

  convertNhomTC(nhomtc:string){
    if(nhomtc=='TCBoTro') return 'Bổ trợ';
    else if(nhomtc==null||nhomtc==''||nhomtc==undefined||nhomtc.length==0) return 'Bắt buộc';
    else return 'Chuyên ngành';
  }

  ChiTietHP(id){
    $('#datachitiethp').empty();
    $('#dialog-add').css('display','block');
    var elementOffset = $(`#dc`);
    var height = elementOffset.height();
    var width = elementOffset.width();
    elementOffset.css('top',`calc(50% - ${height/2}px)`);
    elementOffset.css('left',`calc(50% - ${width/2}px)`);
    this._api.ChiTietHPById(id).subscribe((res:any)=>{
      $('#datachitiethp').append(`
        <b>Mã môn:</b> ${res[0]['maMonHoc']} <br>
        <b>Tên môn:</b> ${res[0]['tenMonHoc']} <br>
        <b>Tổng số TC:</b> ${res[0]['soTinChi']} <br>
        <b>Số TC lí thuyết:</b> ${res[0]['soTinChiLiThuyet']} <br>
        <b>Số TC thực hành:</b> ${res[0]['soTinChiThucHanh']} <br>
        <br>
        <div>
        <b><i>Danh sách môn học tiên quyết</i></b>
        <div style="width:100%;display:flex;" id="dstq"></div>
        </div>`);
      this._api.LayDSMHTienQuyet(id).subscribe((res:any)=>{
       
        res.forEach((element,index) => {
          $('#dstq').append(`
          <span style="padding:10px;margin-left:10px;border:1px solid black">
            <b>Mã môn:</b> ${element.maMonHoc}<br>
            <b>Tên môn:</b> ${element.tenMonHoc}<br>
            <b>Tổng số TC:</b> ${element.soTinChi}<br>
          </span>
          `);});
          })
      
    })
   
   
  }

  closeDialog(){
    $('#dialog-add').css('display','none');
  }

 public DangKiTCBT(mes,maLopMonHoc,maMonHoc,soTinChi,soLuongSVDangKi){
  var me=this;
  if(mes=='TCBoTro')
  {
    if(soLuongSVDangKi>=30) {this.showAlert('Không thể đăng kí! Lớp đã đầy','none')}
    else{
      var tcmax=this.maxTCBoTro[0]['soTCTCMax'];
      this._api.SoTCDaDangKi(this.masv,this.LayHocKiTuMaSV(),this.maxTCBoTro[0]['maMonHoc']).subscribe((res)=>{
        if(res.length==0) this.ddk=0;
        else this.ddk=(res[0]['soTCDaDangKi']);
        if(this.ddk+soTinChi<=tcmax)
         {
            this.showAlert('Bạn có chắc chắn muốn đăng kí HP này?','block');
            $('#btnYes').on('click', function() {
              me._api.DangKiLopMonHoc(me.masv,maMonHoc,maLopMonHoc).subscribe((res)=>{
              me.showAlert(res[0]['mes'],'none');
            })
          });
         }else this.showAlert(`Không thể đăng kí quá ${tcmax} tín chỉ`,'none');
     });
    }
  }else if(mes=='TCChuyenNganh')
  {
    if(soLuongSVDangKi>=30) {this.showAlert('Không thể đăng kí! Lớp đã đầy','none')}
    else{
      var tcmax=this.maxTCChuyenNganh[0]['soTCTCMax'];
      this._api.SoTCDaDangKi(this.masv,this.LayHocKiTuMaSV(),this.maxTCChuyenNganh[0]['maMonHoc']).subscribe((res)=>{
        if(res.length==0) this.ddk=0;
        else this.ddk=(res[0]['soTCDaDangKi']);
        if(this.ddk+soTinChi<=tcmax)
         {
            this.showAlert('Bạn có chắc chắn muốn đăng kí HP này?','block');
            $('#btnYes').on('click', function() {
              me._api.DangKiLopMonHoc(me.masv,maMonHoc,maLopMonHoc).subscribe((res)=>{
              me.showAlert(res[0]['mes'],'none');
            })
          });
         }else this.showAlert(`Không thể đăng kí quá ${tcmax} tín chỉ`,'none');
     });
    }
  }else
  {
    if(soLuongSVDangKi>=30) {this.showAlert('Không thể đăng kí! Lớp đã đầy','none')}
    else{
      // var tcmax=this.arrDsLopMoBB[0]['soTCTCMax'];
      // this._api.SoTCDaDangKi(this.masv,this.LayHocKiTuMaSV(),this.arrDsLopMoBB[0]['maMonHoc']).subscribe((res)=>{
      //   if(res.length==0) this.ddk=0;
      //   else this.ddk=(res[0]['soTCDaDangKi']);
      //   if(this.ddk+soTinChi<=tcmax)
      //    {
            this.showAlert('Bạn có chắc chắn muốn đăng kí HP này?','block');
            $('#btnYes').on('click', function() {
              me._api.DangKiLopMonHoc(me.masv,maMonHoc,maLopMonHoc).subscribe((res)=>{
              me.showAlert(res[0]['mes'],'none');
            })
          // });
        //  }
        //  else this.showAlert(`Không thể đăng kí quá ${tcmax} tín chỉ`,'none');
     });
    }
  }

    


  }
 
   setPosition(element) {
    var elementOffset = $(`#${element}`);
    var height = elementOffset.height();
    var width = elementOffset.width();
    elementOffset.css('top',`calc(19% - ${height/2}px)`);
    elementOffset.css('left',`calc(40% - ${width/2}px)`);
  }

  showAlert(conten:string,btnYes) {
   $('#alert-body').empty();
   $('#alert-body').append(conten);
   $('#l-alert').css('display','block');
   $('#btnYes').css('display',btnYes);
   this.setPosition('alert-content');
  }

  closeAlert(){
    $('#l-alert').css('display','none');
  }

  XemKhungChuongTrinh(){
    this._api.XemKhungChuongTrinh(this.masv).subscribe((res:any)=>{
     this.maxTCBoTro=res.filter((item)=>{
       return item.loaiMonHoc==false&&item.soTCTCMax>0&&item.maMonHoc=='TCBoTro'&&item.hocKi==this.LayHocKiTuMaSV();
      });

     this.maxTCChuyenNganh=res.filter((item)=>{
      return item.loaiMonHoc==false&&item.soTCTCMax>0&&(item.maMonHoc=='TCCNPM' || item.maMonHoc=='TCMMT&TT' ||  item.maMonHoc=='TCKHMT&DV' ||item.maMonHoc=='TCHTTT')&&item.hocKi==this.LayHocKiTuMaSV();
    });
    })
 }

  LayDSLopMonHocTheoKi()
  {
    this._api.LayDSLopMonHocTheoKi((String)(this.LayHocKiTuMaSV()))
        .subscribe((res:any)=>{
    
          this.arrDsLopMoChuyenNganh= res.filter((item)=>{
            return item.nhomTuChon=='TCCNPM' || item.nhomTuChon=='TCMMT&TT' ||  item.nhomTuChon=='TCKHMT&DV' ||item.nhomTuChon=='TCHTTT';
          });
          this.arrDsLoMoTuChon=res.filter((item)=>{
            return item.nhomTuChon=='TCBoTro';
          });
          this.arrDsLopMoBB=res.filter((item)=>{
            return item.nhomTuChon==null ||item.nhomTuChon==''||item.nhomTuChon==undefined; 
          });
        })
  }

  LayHocKiTuMaSV(){
    var ki:Number;
    var namnhaphoc=(Number)(this.masv.slice(0, 4));
    var date=new Date();
    var thisYear=date.getFullYear();
    var thisMonth=date.getMonth()+1;
    var a=thisYear-namnhaphoc+1;
    if(thisMonth>=1||thisMonth<=6) ki=a*2-2;
    else ki=a*2-1;
    return ki;
  }

  showdslm(){
    $('#ct-dslmddk').css('display','none');
    $('#btn-dslm').addClass('content-top-item-active');
    $('#btn-dslmddk').removeClass('content-top-item-active');
    $('#ct-dslm').css('display','block');
    this.LayDSLopMonHocTheoKi();
  }

  showdslmddk(){
    
    $('#ct-dslm').css('display','none');
    $('#ct-dslmddk').css('display','block');
    $('#btn-dslmddk').addClass('content-top-item-active');
    $('#btn-dslm').removeClass('content-top-item-active');
    this.DSLopMonHocCua1SV();
  }

  sortBBup(){
    this.arrDsLopMoBB.sort((a,b)=>{
      if( a.soTinChi>b.soTinChi) return 1;
      else if( a.soTinChi<b.soTinChi) return -1;
      else return 0;
    })
  }
  sortBBdown(){
    this.arrDsLopMoBB.sort((a,b)=>{
      if( a.soTinChi>b.soTinChi) return -1;
      else if( a.soTinChi<b.soTinChi) return 1;
      else return 0;
    })
  }
  sortSTCBTup(){
    this.arrDsLoMoTuChon.sort((a,b)=>{
      if( a.soTinChi>b.soTinChi) return 1;
      else if( a.soTinChi<b.soTinChi) return -1;
      else return 0;
    })
  }
  sortSTCBTdown(){
    this.arrDsLoMoTuChon.sort((a,b)=>{
      if( a.soTinChi>b.soTinChi) return -1;
      else if( a.soTinChi<b.soTinChi) return 1;
      else return 0;
    })
  }


  sortSLSVBTup(){
    this.arrDsLoMoTuChon.sort((a,b)=>{
      if( a.soLuongSVDangKi>b.soLuongSVDangKi) return 1;
      else if( a.soLuongSVDangKi<b.soLuongSVDangKi) return -1;
      else return 0;
    })
  }
  sortSLSVBTdown(){
    this.arrDsLoMoTuChon.sort((a,b)=>{
      if( a.soLuongSVDangKi>b.soLuongSVDangKi) return -1;
      else if( a.soLuongSVDangKi<b.soLuongSVDangKi) return 1;
      else return 0;
    })
  }



  sortTCCNup(){
    this.arrDsLopMoChuyenNganh.sort((a,b)=>{
      if( a.soTinChi>b.soTinChi) return 1;
      else if( a.soTinChi<b.soTinChi) return -1;
      else return 0;
    })
  }
  sortTCCNdown(){
    this.arrDsLoMoTuChon.sort((a,b)=>{
      if( a.soTinChi>b.soTinChi) return 1;
      else if( a.soTinChi<b.soTinChi) return -1;
      else return 0;
    })
  }

  sortSLSVCNup(){
    this.arrDsLopMoChuyenNganh.sort((a,b)=>{
      if( a.soLuongSVDangKi>b.soLuongSVDangKi) return 1;
      else if( a.soLuongSVDangKi<b.soLuongSVDangKi) return -1;
      else return 0;
    })
  }
  sortSLSVCNdown(){
    this.arrDsLopMoChuyenNganh.sort((a,b)=>{
      if( a.soLuongSVDangKi>b.soLuongSVDangKi) return -1;
      else if( a.soLuongSVDangKi<b.soLuongSVDangKi) return 1;
      else return 0;
    })
  }
}
