import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../lib/authentication.service';

@Injectable(
)

export class ProfileService {

  constructor(private _http:HttpClient,private authenticationService: AuthenticationService) { }
  private apiUrl='https://localhost:44351/api/Accounts/getAccByUserName/'+this.authenticationService.userValue.username;
  private apiUrlGv='https://localhost:44351/api/Accounts/getInfoGv/'+this.authenticationService.userValue.username;
  private apiListsub='https://localhost:44351/api/ClassRegistion/getListSubject/'+this.authenticationService.userValue.idFaculty;
  private apiLSGv='https://localhost:44351/api/ClassRegisters/layLopGvDaDangKi/'+this.authenticationService.userValue.username;
  getProfile():Observable<any[]>
  {
    return this._http.get<any[]>(this.apiUrl);
  }
  getProfileGV():Observable<any[]>
  {
    return this._http.get<any[]>(this.apiUrlGv);
  }
  getListSubject()
  {
    return this._http.get<(any[])>(this.apiListsub);
  }
  laydanhsachhocphandadangki()
  {
    return this._http.get<(any[])>(this.apiLSGv);
  }
}
