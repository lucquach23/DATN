import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthenticationService } from '../lib/authentication.service';

//const httpOption={headers:new HttpHeaders({'Content-Type':'application/json'})}
@Injectable(
)
export class QuanTriAPI {
  constructor(private _http:HttpClient,private auth:AuthenticationService) { }

    public masv:string=this.auth.userValue.username;

   
    private urlLayDSLopMonHocTheoKi='https://localhost:44387/api/QuanTri/LayDSLopMonHocTheoKi/';

    private urlDSLopMonHocDaDong='https://localhost:44387/api/QuanTri/DSLopMonHocDaDong';

    private urlDongLop='https://localhost:44387/api/QuanTri/DongLop';

    private urlPhanTrangLopDaDong='https://localhost:44387/api/QuanTri/PhanTrangLopDaDong/';

    private urlDSGV='https://localhost:44387/api/QuanTri/DSGV';

    private urlDSHP='https://localhost:44387/api/NguoiDung/DSHP';

    private urlSuaLopMonHoc='https://localhost:44387/api/QuanTri/SuaLopMonHoc';

    private urlHuyLop='https://localhost:44387/api/QuanTri/HuyLop';

    private urlXemDSTheoMaLopMonHoc='https://localhost:44387/api/QuanTri/XemDSTheoMaLopMonHoc/';

    private urlMoLop='https://localhost:44387/api/QuanTri/MoLop';

    private urlLayTTLop='https://localhost:44387/api/QuanTri/LayTTLop/';

    private urlLayDSSVTheoMaLopChuyenNganh='https://localhost:44387/api/QuanTri/LayDSSVTheoMaLopChuyenNganh/';


    private urlLayDSLHPSV='https://localhost:44387/api/QuanTri/LayDSLHPSV/';

    LayDSLHPSV(masv){
      return this._http.get<any[]>(this.urlLayDSLHPSV+masv);
    
    }

    LayDSSVTheoMaLopChuyenNganh(ki,malop){
      return this._http.get<any[]>(this.urlLayDSSVTheoMaLopChuyenNganh+ki+'/'+malop);
    }


    LayTTLop(ml){
      return this._http.get<any[]>(this.urlLayTTLop+ml);
    }

    XemDSTheoMaLopMonHoc(ma){
      return this._http.get<any[]>(this.urlXemDSTheoMaLopMonHoc+ma);
    }

    MoLop(arr){
      return this._http.put(this.urlMoLop,arr);
    }

    HuyLop(arr){
      return this._http.put(this.urlHuyLop,arr);
    }

    SuaLopMonHoc(obj){
      return this._http.put(this.urlSuaLopMonHoc,obj);
    }
    
    DSHP(){
      return this._http.get<any[]>(this.urlDSHP);
    }

    DSGV(){
      return this._http.get<any[]>(this.urlDSGV);
    }


    PhanTrangLopDaDong(curent,pagesize){
      return  this._http.get<any[]>(this.urlPhanTrangLopDaDong+curent+'/6'+'/'+pagesize);
    }

    DongLop(arr){
       return this._http.put<any[]>(this.urlDongLop,arr);
    }

    DSLopMonHocDaDong(){
      return this._http.get<any[]>(this.urlDSLopMonHocDaDong);
    }

    LayDSLopMonHocTheoKi(ki:string){
        return this._http.get<any[]>(this.urlLayDSLopMonHocTheoKi+ki);
    }
    
}
