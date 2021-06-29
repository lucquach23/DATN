import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthenticationService } from '../lib/authentication.service';

//const httpOption={headers:new HttpHeaders({'Content-Type':'application/json'})}
@Injectable(
)
export class NguoiDungAPI {
  constructor(private _http:HttpClient,private auth:AuthenticationService) { }

    public masv:string=this.auth.userValue.username;

    private urlLayTTSV=`https://localhost:44387/api/NguoiDung/LayTTSV/`;

    private urlXemCTDT=`https://localhost:44387/api/NguoiDung/XemCTDT/`;

    private urlTongSoTinChiDaTichLuy ='https://localhost:44387/api/NguoiDung/TongSoTinChiDaTichLuy/';
    
    private urlXemKhungChuongTrinh='https://localhost:44387/api/NguoiDung/XemKhungChuongTrinh/';

    private urlDiemMonHoc='https://localhost:44387/api/NguoiDung/DiemMonHoc/';

    private urlLayDSLopMonHocTheoKi='https://localhost:44387/api/QuanTri/LayDSLopMonHocTheoKi/';

    private urlDangKiLopMonHoc='https://localhost:44387/api/NguoiDung/DangKiLopMonHoc';

    private urlSoTCDaDangKi='https://localhost:44387/api/NguoiDung/SoTCDaDangKi/';

    private urlChiTietHPById='https://localhost:44387/api/NguoiDung/ChiTietHPById/';

    private urlLayDSMHTienQuyet='https://localhost:44387/api/QuanTri/LayDSMHTienQuyet/';

    private urlDSLopMonHocCua1SV='https://localhost:44387/api/NguoiDung/DSLopMonHocCua1SV/';

    private urlXoaLopMonHocDaDangKi='https://localhost:44387/api/NguoiDung/XoaLopMonHocDaDangKi/';

    private urlXemTienDoHoanThanhCT='https://localhost:44387/api/NguoiDung/XemTienDoHoanThanhCT/';
    
    private urlDSHP='https://localhost:44387/api/NguoiDung/DSHP';

    private urlDSTQ='https://localhost:44387/api/NguoiDung/DSTQ';

    private urlSuaThongTinCaNhan='https://localhost:44387/api/NguoiDung/SuaThongTinCaNhan';


    SuaThongTinCaNhan(obj){
        return this._http.put<any[]>(this.urlSuaThongTinCaNhan,obj);
    }

    DSTQ(){
        return this._http.get<any[]>(this.urlDSTQ);
    }

    DSHP(){
        return this._http.get<any[]>(this.urlDSHP);
    }

    XemTienDoHoanThanhCT(id:string){
        return this._http.get<any[]>(this.urlXemTienDoHoanThanhCT+id);
    }
    
    XoaLopMonHocDaDangKi(mlmh:string,masv:string){
        return this._http.delete<any[]>(this.urlXoaLopMonHocDaDangKi+mlmh+'/'+masv);
    }

    DSLopMonHocCua1SV(ki,masv){
        return this._http.get<any[]>(this.urlDSLopMonHocCua1SV+ki+'/'+masv);
    }

    LayDSMHTienQuyet(id:string){
        return this._http.get<any[]>(this.urlLayDSMHTienQuyet+id);
    }

    ChiTietHPById(id:string){
        return this._http.get<any[]>(this.urlChiTietHPById+id);
    }


    SoTCDaDangKi(masv:string,ki:Number,nhomtc:string){
        return this._http.get<any[]>(this.urlSoTCDaDangKi+masv+'/'+ki+'/'+nhomtc);
    }
    
    DangKiLopMonHoc(masv:string,mamh:string,malmh:string){
        return this._http.post<any[]>(this.urlDangKiLopMonHoc+`?masv=${masv}&mh=${mamh}&mlmh=${malmh}`,
            {});
    }

    LayDSLopMonHocTheoKi(ki:string){
        return this._http.get<any[]>(this.urlLayDSLopMonHocTheoKi+ki);
    }
    
    DiemMonHoc(masv:string,mamh:string){
        return this._http.get<any[]>(this.urlDiemMonHoc+masv+'/'+mamh);
    }

    XemKhungChuongTrinh(id:string){
        return this._http.get<any[]>(this.urlXemKhungChuongTrinh+id);
    }

    TongSoTinChiDaTichLuy(id:string){
        return this._http.get<any[]>(this.urlTongSoTinChiDaTichLuy+id);
    }
    
    LayTTSV(id:string){
        return this._http.get<any[]>(this.urlLayTTSV+id);
    }
    XemCTDT(id:string){
        return this._http.get<any[]>(this.urlXemCTDT+id);
    }
    
}
