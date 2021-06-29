import { Component, NgModule, OnInit } from '@angular/core';
import {NguoiDungAPI}from '../../../api-service/nguoidungapi'
import { AuthenticationService } from '../../../lib/authentication.service';
declare var $: any;


@Component({
  selector: 'app-monhoc',
  templateUrl: './monhoc.component.html',
  styleUrls: ['./monhoc.component.css'],
  
})


export class MonhocComponent implements OnInit {

  constructor(private _api: NguoiDungAPI,private _auth: AuthenticationService) { }

  ngOnInit(): void {
    $('#navbar').css('height',`100vh`);
    this.DSHP();
  
  }
  public dshp:any;

  DSHP(){
    this._api.DSHP().subscribe((res)=>{
      this.dshp=res;
      $('#tongsobanghi').empty();
      $('#tongsobanghi').append(`Tổng : <b>${this.dshp.length}</b> bản ghi`);
    })
   
  }

  searchName(key){
    if(key==''||key.length==0){
      this.DSHP();
    }else{
      this._api.DSHP().subscribe((res)=>{
        this.dshp=res.filter((v)=>{
          return JSON.stringify(v.tenMonHoc.toLocaleLowerCase()).lastIndexOf(key.toLocaleLowerCase()) > -1
        })
        $('#tongsobanghi').empty();
        $('#tongsobanghi').append(`Tổng : <b>${this.dshp.length}</b> bản ghi`);
      })
    }
  }


  convertNhomTC(nhomtc:string){
    if(nhomtc=='TCBoTro') return 'Bổ trợ';
    else if(nhomtc==null||nhomtc==''||nhomtc==undefined||nhomtc.length==0) return 'Bắt buộc';
    else if(nhomtc=='TCHTTT') return 'Hệ thống thông tin';
    else if(nhomtc=='TCCNPM') return 'Công nghệ phần mềm';
    else if(nhomtc=='TCMMTvTT') return 'Mạng máy tính & TT';
    else if(nhomtc=='TCGDTC') return 'Giáo dục thể chất';
    else if(nhomtc=='TCKHMTvDV') return 'Khoa học máy tính  & DV';
    return '';
  }
  selectOption(key){
    if(key=='null'){
      this.DSHP();
    }else{
      this._api.DSHP().subscribe((res)=>{
        this.dshp=res.filter((v)=>{
          return JSON.stringify(v.nhomTuChon).lastIndexOf(key) > -1
        })
        $('#tongsobanghi').empty();
      $('#tongsobanghi').append(`Tổng : <b>${this.dshp.length}</b> bản ghi`);
      })
    }
  }


}
