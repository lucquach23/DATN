import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../lib/authentication.service';

@Injectable(
)

export class listClassRegistionedOfStudent {

  constructor(private _http:HttpClient,private authenticationService: AuthenticationService) { }
  private apiUrl='https://localhost:44351/api/ClassRegistion/getClassOfStudentById/'+this.authenticationService.userValue.username;

  getlistClassRegistionedOfStudent():Observable<any[]>
  {
     return this._http.get<any[]>(this.apiUrl);
  }

  
}
