import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../lib/authentication.service';
import {themCO} from '../models/role'
const httpOption={headers:new HttpHeaders({'Content-Type':'application/json'})}
@Injectable(
)
export class listClassOpen {
  constructor(private _http:HttpClient) { }
  private apiUrl='https://localhost:44351/api/ClassRegistion/getListSubjectClass';
  private addurl ='https://localhost:44351/api/ListCrs';
  private apiListFaculty='https://localhost:44351/GetListFacuty';
  private apiGetClassOpenFaculty='https://localhost:44351/api/ClassRegistion/getListClassOpenByIdFaculty/';
  private api2info2gv='https://localhost:44351/api/ClassRegistion/get2infogv/'; 
  private apiClassCObyidgv='https://localhost:44351/api/ClassRegistion/getListClassOpenByIdgv/';
  private apilisthp='https://localhost:44351/api/Subjects/getListSubjectByIdFaculty/';
  private apigetlistsvhp='https://localhost:44351/api/ClassRegistion/laysvtheomahp/';
  private apiListCObyidsv='https://localhost:44351/api/ClassRegistion/getClassOfStudentById/';
  private api_class_major_faculty='https://localhost:44351/api/ClassRegistion/classMajorByFaculty/';
  private api_class_major_id_class='https://localhost:44351/api/ClassRegistion/getClassMajorByIdClass/';

 get_class_major_id_class(id:string)
  {
    return this._http.get<any[]>(this.api_class_major_id_class+id);
  }
  get_class_major_faculty(id:string)
  {
    return this._http.get<any[]>(this.api_class_major_faculty+id);
  }
  ListCObyidsv(id:string)
  {
    return this._http.get<any[]>(this.apiListCObyidsv+id);
  }
  getlistsvhp(id:string)
  {
    return this._http.get<any[]>(this.apigetlistsvhp+id);
  }
  listhpbyk(id:string)
  {
    return this._http.get<any[]>(this.apilisthp+id);
  }
  ClassCObyidgv(id:string){
    return this._http.get<any[]>(this.apiClassCObyidgv+id);
  }
  get2infogv(id:string){
    return this._http.get<any[]>(this.api2info2gv+id);
  }
  GetClassOpenFaculty(id:string):Observable<any[]>{
    return this._http.get<any[]>(this.apiGetClassOpenFaculty+id);
  }
  getListFaculty():Observable<any[]>{
    return this._http.get<any[]>(this.apiListFaculty);
  }


  getListClassOpen():Observable<any[]>
  {
     return this._http.get<any[]>(this.apiUrl);
  }
  
  addclassR(themco1:themCO):Observable<themCO>
  {
    return this._http.post<themCO>(this.addurl,themco1,httpOption)
    .pipe(tap((s:themCO)=>console.log(`data= ${JSON.stringify(s)}`)),
    catchError(err=>of(new themCO())));
  }

  deleteCO( obj: any) {
    const body = JSON.stringify(obj);
    return this._http
      .post<any>('https://localhost:44351/api/ClassRegistion/deleteCO', body,httpOption)
      .pipe(
        map(res => {
          return res;
        })
      );      
  }



}
