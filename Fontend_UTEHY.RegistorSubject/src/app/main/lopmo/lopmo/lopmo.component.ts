import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {QuanTriAPI} from '../../../api-service/quantriapi';
import {LopMonHoc} from './lopmonhoc';
import { DatePipe } from '@angular/common';
import  {ExportService} from '../../../_services/export.service';
declare var $: any;
@Component({
  selector: 'app-lopmo',
  templateUrl: './lopmo.component.html',
  styleUrls: ['./lopmo.component.css'],
  providers:[QuanTriAPI]
})
export class LopmoComponent implements OnInit {
  errorMessage: any;
  constructor(private _api:QuanTriAPI, private _http:HttpClient,private ex:ExportService) { }

  ngOnInit(): void {
   
    this.selectOption(1);
    this.DSDangMo();
    this.PhanTrangLopDaDong(1,250);
    
  
  } 
  public last_record:Number;
  public danh_sach_lop_hoc_phan;
  public danh_sach_lop_hoc_phan_da_dong;
  public listChecked=[];
  public listCheckDaDong=[];

  public dataPhanTrangDSDaDong;

  public tong_so_ban_ghi_ds_da_dong;

  public ds_lop_khong_du_dieu_kien;
  
  public list_gv;

  public list_hp;

  


  SuaLop(mlmh,tenmh,magv,thoiGian,tuanHoc,phongHoc){
    $('#dialog-sua').css('display','block');
    this.setPosition('sua');
    $('#s-hocphan').val(tenmh);
    $('#s-giangvien').val(magv);
    // $('#s-phonghoc').val(phongHoc);
    $('#s-thoigian').val(thoiGian);
    $('#s-tuanhoc').val(tuanHoc);
    $('#s-malopmonhoc').val(mlmh);
  }
  submitSuaLop(){
    this.checkNull('s-phonghoc');
    this.checkNull('s-thoigian');
    this.checkNull('s-tuanhoc');
    if(this.checkNull('s-phonghoc')&&
    this.checkNull('s-thoigian')&&
    this.checkNull('s-tuanhoc'))
    {
      var obj=new LopMonHoc();
      obj.maLopMonHoc=$('#s-malopmonhoc').val();
      obj.thoiGian=$('#s-thoigian').val();
      obj.tuanHoc= $('#s-tuanhoc').val();
      obj.phongHoc= $('#s-phonghoc').val();
      this._api.SuaLopMonHoc(obj).subscribe((res:any)=>{
        $('#dialog-sua').css('display','none');
        $('#alert-body').empty();
        $('#alert-body').append(`${res[0]['soBanGhiBiAnhHuong']} lớp được sửa!`);
        $('#btnYes').css('display','none');
        $('#l-alert').css('display','block');
      })
    }
  }

  closeFormSua(){
    $('#dialog-sua').css('display','none');
  }

  public arr_ma_k_du_dk=[];


  HuyLopKhongDuDieuKien(){
    $('#alert-body').empty();
    $('#alert-body').append(`Xác nhận hủy tất cả các lớp không đủ điều kiện!`);
    $('#btnYes').css('display','block');
    $('#l-alert').css('display','block');
    $('#btnYes').on('click',()=>{
      this._api.DSLopMonHocDaDong().subscribe((res:any)=>{
        this.ds_lop_khong_du_dieu_kien=res.filter((val)=>{
          return val.soLuongSVDangKi<6; 
        })
        this.ds_lop_khong_du_dieu_kien.forEach(element => {
          this.arr_ma_k_du_dk.push(element.maLopMonHoc);
        });
        this._api.HuyLop(this.arr_ma_k_du_dk).subscribe((res:any)=>{
          //console.log(res)
          $('#alert-body').empty();
          $('#alert-body').append(`Số bản ghi bị ảnh hưởng: ${res.data}`);
          $('#btnYes').css('display','none');
        })
      })
    });
    //this.PhanTrangLopDaDong(1,250);
    //this.DSDaDong();
    
  }


  DSHP(){
    this._api.DSHP().subscribe((res:any)=>{
      this.list_hp=res;
    })
  }

  DSGV(){
    this._api.DSGV().subscribe((res:any)=>{
      this.list_gv=res;
    })
  }

  tangPage(id){
    var x=$(`#${id}`).text();
     $(`#${id}`).empty();
     $(`#${id}`).append(`${parseInt(x)+5}`);
  }
  giamPage(id){
    var x=$(`#${id}`).text();
    if(parseInt(x)<6)
    {

    }else{
      $(`#${id}`).empty();
      $(`#${id}`).append(`${parseInt(x)-5}`);
    }
    
  }

  tienPage(){
    $('#t1').removeClass('active');
    $('#t2').removeClass('active');
    $('#t3').removeClass('active');
    $('#t4').removeClass('active');
    $('#t5').removeClass('active');
    this.tangPage('t1');
    this.tangPage('t2');
    this.tangPage('t3');
    this.tangPage('t4');
    this.tangPage('t5');
  }
  luiPage(){
    $('#t1').removeClass('active');
    $('#t2').removeClass('active');
    $('#t3').removeClass('active');
    $('#t4').removeClass('active');
    $('#t5').removeClass('active');
    this.giamPage('t1');  
    this.giamPage('t2');  
    this.giamPage('t3');  
    this.giamPage('t4');  
    this.giamPage('t5');  
  }

  showtt(e){
    var x=$(e).text();
    $('#t1').removeClass('active');
    $('#t2').removeClass('active');
    $('#t3').removeClass('active');
    $('#t4').removeClass('active');
    $('#t5').removeClass('active');
    $(e).addClass('active');
    this.PhanTrangLopDaDong(parseInt(x),Math.ceil(this.tong_so_ban_ghi_ds_da_dong));
  }

  

  checkNull(id){
    if($(`#${id}`).val()=="")
    {
      $(`#${id}`).css('border','1px solid red');
      return false;
    }
    else
    {
      $(`#${id}`).css('border','1px solid green');
      return true;
    }
  }
  checkSo(id){
    var x=$(`#${id}`).val();
    if(id=='hocki'){
      if(x==""||isNaN (x)||x<=0||x>8){
        $(`#${id}`).css('border','1px solid red');
        return false;
      }else {
        $(`#${id}`).css('border','1px solid green');
        return true;
      }
    }else{
   
    if(x==""||isNaN (x)||x<=0){
      $(`#${id}`).css('border','1px solid red');
      return false;
    }else {
      $(`#${id}`).css('border','1px solid green');
      return true;
    }
  }
  }
  submitThemLMH(){
   
    this.checkNull('hocphan');
    this.checkNull('giangvien');
    this.checkNull('phonghoc');
    this.checkNull('thoigian');
    this.checkNull('tuanhoc');
    this.checkSo('minsv');
    this.checkSo('maxsv');
    this.checkSo('hocki');
   if(this.checkNull('hocphan')&&
   this.checkNull('giangvien')&&
   this.checkNull('phonghoc')&&
   this.checkNull('thoigian')&&
   this.checkNull('tuanhoc')&&
   this.checkSo('minsv')&&
   this.checkSo('maxsv')&&
   this.checkSo('hocki')){
    var obj=new LopMonHoc();
    obj.maMonHoc=$('#hocphan').val().split('-')[0].trim();
    obj.maGiangVien=$('#giangvien').val().split('-')[0].trim();
    obj.phongHoc=$('#phonghoc').val();
    obj.thoiGian=$('#thoigian').val();
    obj.tuanHoc=$('#tuanhoc').val();
    obj.minSV=$('#minsv').val();
    obj.maxSV=$('#maxsv').val();
    obj.hocKi=$('#hocki').val();
    obj.maLopMonHoc='BoSung-'+obj.maMonHoc+'-'+obj.maGiangVien+'-'+'k'+obj.hocKi;
    this._http.post('https://localhost:44387/api/QuanTri/ThemMoiLopMonHoc',obj).subscribe((res:any)=>{
      $('#dialog-add').css('display','none');
      $('#alert-body').empty();
      $('#alert-body').append(`${res[0]['soBanGhiBiAnhHuong']} lớp được thêm!`);
      $('#btnYes').css('display','none');
      $('#l-alert').css('display','block');
    })
   }

    
  }

  ThemMoiLMH(){
    $('#dialog-add').css('display','block');
    this.setPosition('dc');
    this.DSGV();
    this.DSHP();
    
  }
  closeDialog(){
    $('#dialog-add').css('display','none');
  }

  setPosition(element) {
     var elementOffset=$(`#${element}`);
     var height = elementOffset.height();
     var width = elementOffset.width();
     var h=$(window).height();
     elementOffset.css('top',`calc(${h-(h-50)}% - ${height/2}px)`);
     elementOffset.css('left',`calc(50% - ${width/2}px)`);
   
   }

  PhanTrangLopDaDong(current,total){
    this._api.PhanTrangLopDaDong(current,total).subscribe((res:any)=>{
      this.dataPhanTrangDSDaDong=res;
      //console.log(this.dataPhanTrangDSDaDong) 
    })
   
  }
  
  DSDangMo(){
    $('#data-chitietlophocphan').css('display','none');
    $('#data-dadong').css('display','none');
    $('#data-dangmo').css('display','block');
    $('#btn-dadong').removeClass('content-top-item-active');
    $('#btn-chitietlophocphan').removeClass('content-top-item-active');
    $('#btn-dangmo').addClass('content-top-item-active');
    this.selectOption(1);    
  }

  DSDaDong(){
    $('#data-chitietlophocphan').css('display','none');
    this.PhanTrangLopDaDong(1,250);
    $('#data-dangmo').css('display','none');
    $('#data-dadong').css('display','block');
    $('#btn-dangmo').removeClass('content-top-item-active');
    $('#btn-chitietlophocphan').removeClass('content-top-item-active');
    $('#btn-dadong').addClass('content-top-item-active');
    this._api.DSLopMonHocDaDong().subscribe((res:any)=>{
      this.tong_so_ban_ghi_ds_da_dong=res.length;
      this.last_record=Math.ceil(this.tong_so_ban_ghi_ds_da_dong/6);      
    })
  }

  selectOption(x){
   this._api.LayDSLopMonHocTheoKi(x).subscribe((res:any)=>{
     this.danh_sach_lop_hoc_phan=res;
   })
  }

  pushToArr(x,id,checked,tt){
    if(x=='dangmo'){
      if(checked == false)
      {
       this.listChecked.push(id);
       $(`#tr${tt+1}`).css('background-color','#8DEEEE');
      }
      else{     
         var index = this.listChecked.findIndex(x => x === id);
         this.listChecked.splice(index,1);
         $(`#tr${tt+1}`).css('background-color','transparent');
      }
      
    }else if(x=='dadong')
    {
      if(checked == false)
      {
       this.listCheckDaDong.push(id);
       $(`#trDD${tt+1}`).css('background-color','#8DEEEE');
      }
      else{     
         var index = this.listChecked.findIndex(x => x === id);
         this.listCheckDaDong.splice(index,1);
         $(`#trDD${tt+1}`).css('background-color','transparent');
      }
    }
     
  }

  convertTTL(t){
    if(t==1) return 'Đang mở';
    else if(t==2)return 'Đã đóng';
    else return 'Đã hủy';
  }

  convertNhomTC(nhomtc:string){
    if(nhomtc=='TCBoTro') return 'Bổ trợ';
    else if(nhomtc==null||nhomtc==''||nhomtc==undefined||nhomtc.length==0) return 'Bắt buộc';
    else if(nhomtc=='TCCNPM') return 'CNPM'
    else return 'Thể chất'
  }

  TimTenHP(key){
    var ki=$('#val-ki').val();
    this._api.LayDSLopMonHocTheoKi(ki).subscribe((res:any)=>{
      this.danh_sach_lop_hoc_phan=res.filter((v)=>{
        return JSON.stringify(v.tenMonHoc.toLocaleLowerCase()).lastIndexOf(key.toLocaleLowerCase()) > -1
      })
    })
  }

  TimTenGV(key){
    var ki=$('#val-ki').val();
    this._api.LayDSLopMonHocTheoKi(ki).subscribe((res:any)=>{
      this.danh_sach_lop_hoc_phan=res.filter((v)=>{
        return JSON.stringify(v.tenGiangVien.toLocaleLowerCase()).lastIndexOf(key.toLocaleLowerCase()) > -1
      })
    })
  }

  TuDuoiLen(){
    this.danh_sach_lop_hoc_phan.sort((a,b)=>{
      if( a.soLuongSVDangKi>b.soLuongSVDangKi) return 1;
      else if( a.soLuongSVDangKi<b.soLuongSVDangKi) return -1;
      else return 0;
    })
  }

  TuTrenXuong(){
    this.danh_sach_lop_hoc_phan.sort((a,b)=>{
      if( a.soLuongSVDangKi>b.soLuongSVDangKi) return -1;
      else if( a.soLuongSVDangKi<b.soLuongSVDangKi) return 1;
      else return 0;
    })
  }

  closeAlert(){
    $('#l-alert').css('display','none');
    $('#alert-body').empty();
    this.ngOnInit();
  }

  CapNhatTrangThai(){
    $('#alert-body').empty();
    var me=this;
    var mes="";
    if(this.listChecked.length==0){
      $('#alert-body').empty();
      $('#alert-body').append('Không có lớp nào được chọn!')
      $('#l-alert').css('display','block')
    }else 
    {
      $('#alert-body').empty();
      $('#alert-body').append(`Bạn có chắc chắn muốn đóng ${this.listChecked.length} lớp đã chọn?`);
      $('#btnYes').css('display','block');
      $('#l-alert').css('display','block');
      $('#btnYes').on('click',function(){
        me._api.DongLop(me.listChecked).subscribe((res:any)=>{
          $('#alert-body').empty();
          $('#alert-body').append(`${res.data} lớp đã đóng!`);
          $('#btnYes').css('display','none');
           $('#l-alert').css('display','block')
        })
      })
       
     };
     //this.DSDaDong();
     
  } 

  DongAll(){
    $('#alert-body').empty();
      $('#alert-body').append(`Bạn có chắc chắn muốn đóng tất cả các lớp đang mở?`);
      $('#btnYes').css('display','block');
      $('#l-alert').css('display','block');
      $('#btnYes').on('click',()=>{
        this._http.put('https://localhost:44387/api/QuanTri/DongAll',{}).subscribe((res:any)=>{
          $('#alert-body').empty();
          $('#alert-body').append(`${res[0]['soBanGhiBiAnhHuong']} lớp đã đóng!`);
          $('#btnYes').css('display','none');
           $('#l-alert').css('display','block')
        })
      });
  }

  public dschitietlhp; 

  ShowChiTietLopHocPhan(maLopMonHoc,maMonHoc,tenMonHoc,soTinChiLiThuyet,soTinChiThucHanh,tenGiangVien,email,soDienThoai){
    $('#data-dangmo').css('display','none');
    $('#data-dadong').css('display','none');
    $('#btn-dangmo').removeClass('content-top-item-active');
    $('#btn-dadong').removeClass('content-top-item-active');
    $('#btn-chitietlophocphan').addClass('content-top-item-active');
    $('#data-chitietlophocphan').css('display','block');
    $('#data-trenbang').empty();
    $('#data-trenbang').append(`
    <div>
    <span><b>Mã lớp học phần: </b></span><span>${maLopMonHoc}</span>
    </div>
    <div>
        <span><b>Mã học phần: </b></span><span>${maMonHoc}</span>
    </div>
    <div>
        <span><b>Tên học phần: </b></span><span>${tenMonHoc}</span>
    </div>
    <div>
        <span><b>Số Tc lí thuyết: </b></span><span>${soTinChiLiThuyet}</span>
    </div>
    <div>
        <span><b>Số Tc thực hành: </b></span><span>${soTinChiThucHanh}</span>
    </div>
    <div>
        <span><b>Giảng viên: </b></span><span>${tenGiangVien}</span>
    </div>
    <div>
        <span><b>Email: </b></span><span>${email}</span>
    </div>
    <div>
        <span><b>SĐT: </b></span><span>${soDienThoai}</span>
    </div>
    
    `);
    this._api.XemDSTheoMaLopMonHoc(maLopMonHoc).subscribe((res:any)=>{
     this.dschitietlhp=res;
    })
  }
  getFormattedDate(date:any) {
    var datePipe = new DatePipe("en-US");
    date = datePipe.transform(date, 'dd/MM/yyyy');
    return date;
  }

  downDSSV(){
    this.ex.exportExcel(this.dschitietlhp,'data');
  }
  MoLaiLop(){
    var me=this;
    if(this.listCheckDaDong.length==0||this.listCheckDaDong==undefined)
    {
      $('#alert-body').empty();
      $('#alert-body').append('Không có lớp nào được chọn!');
      $('#l-alert').css('display','block');
    }else{
      $('#alert-body').empty();
      $('#alert-body').append(`Bạn có chắc chắn muốn mở ${this.listCheckDaDong.length} lớp đã chọn?`);
      $('#btnYes').css('display','block');
      $('#l-alert').css('display','block');
      $('#btnYes').on('click',function(){
        me._api.MoLop(me.listCheckDaDong).subscribe((res:any)=>{
          $('#alert-body').empty();
          $('#alert-body').append(`${res.data} lớp đã mở!`);
          $('#btnYes').css('display','none');
           $('#l-alert').css('display','block')
        })
      })
    }
  }








}
