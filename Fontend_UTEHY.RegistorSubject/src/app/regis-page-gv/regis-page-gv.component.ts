import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { AuthenticationService } from '../lib/authentication.service';
import {ProfileService} from '../service/profile.service';
import 'rxjs/add/operator/takeUntil';
import {cr} from '../models/cr'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-regis-page-gv',
  templateUrl: './regis-page-gv.component.html',
  styleUrls: ['./regis-page-gv.component.css'],
  providers:[ProfileService]
})
export class RegisPageGVComponent  {
  errorMessage: any;

  constructor(private authenticationService: AuthenticationService,
    private _pro5:ProfileService,
    private fb:FormBuilder, private _http:HttpClient
 
     ) {
    //   this._pro5.getListSubject().subscribe((res:any)=>{
    //     this.filtered=res;
    //   });
    //   this.test();
    //   this._pro5.laydanhsachhocphandadangki().subscribe((res:any)=>{
    //     this.danhsachlopdadangkicuagv=res;
    //   });
    }
//     public danhsachlopdadangkicuagv:any[];
//     public pro5:any[];
    
//     public listCity=[
//       {id:1,name:'Sáng: 7:45-11:00'},
//       {id:2,name:'Chiều: 13:30-16:45'}
//     ];
//     public filtered;
//     public filterString = "";
//     public formdata;
//     public dt:any;
//     public fg:FormGroup
//     ngOnInit() :void{
//       this.test();
//       this._pro5.getListSubject().subscribe((res:any)=>{
//         this.filtered=res;
//         //console.log(this.authenticationService.userValue.idFaculty)
//       });
//     }
//     test(){
//       this._pro5.getProfileGV().subscribe((response:any)=>{
//         this.pro5=response;}); 
//     }
//     logout() {
//       this.authenticationService.logout();
//     }    
//     SortDownTC(){
//       this.filtered.sort((a,b)=>{
//         if( a.number_of_credits>b.number_of_credits) return -1;
//         else if( a.number_of_credits<b.number_of_credits) return 1;
//         else return 0;
//       })
//     }
//     SortUpTC(){
//       this.filtered.sort((a,b)=>{
//         if( a.number_of_credits>b.number_of_credits) return 1;
//         else if( a.number_of_credits<b.number_of_credits) return -1;
//         else return 0;
//       })
//     }


//     id_subject:any;
//     name_subject:any;
//     number_of_credits:any;
//     type:any;
//     name_faculty:any;
//     th:any;
//     time:any;
//     week:any;
//     room:any;
//     public tt:string;
//     getdt(id_subject,name_subject,number_of_credits,type,name_faculty)
//     {
//       this.tt='Đăng kí giảng dạy học phần';
//       this.sttAdd=true;
//       this.sttUpdate=false;
//       this.id_subject=id_subject;
//       this.name_subject=name_subject;
//       this.number_of_credits=number_of_credits;
//       this.type=type;
//       this.name_faculty=name_faculty;
//     };
//     sua(thu,time,week,room,mm,ns,sotc,type){
//       this.sttAdd=false;
//       this.sttUpdate=true;
//       this.tt='Chỉnh sửa thông tin lớp đăng kí';

//       this.th=thu;
//       this.time=time;
//       this.week=week;
//       this.room=room;
//       this.id_subject=mm;
//       this.name_subject=ns;
//       this.number_of_credits=sotc;
//       this.type=type;
//     }

   
// urlPost='https://localhost:44351/api/ClassRegisters';

// public sttAdd:boolean;
// public sttUpdate:boolean;

// gettime(x:number)
// {
// if (x==1) return 'Sáng: 7:45-11:00';
// if(x==2) return 'Chiều: 13:30-16:45';
// }
//   onSubmit(value: any) {
//     if(this.sttAdd==true&&this.sttUpdate==false){
//     const c:cr=new cr();
//     c.idClassRegister=(this.id_subject).trim()+'-'+this.authenticationService.userValue.userName;
//     c.idLecturers=(this.authenticationService.userValue.userName).trim();
//     c.idSemester='K1-2021';
//     c.idSubject=(this.id_subject).trim();
//     c.room=value.phong;
//     c.thu=value.thu;
//     c.time=this.gettime(value.time);
//     c.week=value.tuan;
//    // console.log(c);
//    this._http.post<cr>(this.urlPost,c).subscribe(data => {
//     console.log(data);
//     alert('Đăng kí thành công!');
//     location.reload();})
//   }else if(this.sttAdd==false&&this.sttUpdate==true)
//   {
//     const c:cr=new cr();
//     c.idClassRegister=(this.id_subject).trim()+'-'+this.authenticationService.userValue.userName;
//     c.idLecturers=(this.authenticationService.userValue.userName).trim();
//     c.idSemester='K1-2021';
//     c.idSubject=(this.id_subject).trim();
//     c.room=value.phong;
//     c.thu=value.thu;
//     c.time=this.gettime(value.time);
//     c.week=value.tuan;
//     this._http.put<cr>('https://localhost:44351/api/ClassRegisters/'+c.idClassRegister, c)
//         .subscribe((res)=>{
//           console.log(res);
//           alert('Sửa thành công!');
//           location.reload();
//         });
//   }
// }

//   editClass(){
//   if(confirm("Bạn có chắc chắn muốn đăng kí học học phần này?")) {
//     console.log();
//   }
// }
// deleteAllClass(){
//   if(confirm("Bạn có chắc chắn muốn xoá toàn bộ các lớp đã đăng kí?")) {
//     this._http.delete('https://localhost:44351/api/ClassRegisters/removeAll/'+this.authenticationService.userValue.userName)
//     .subscribe({
//         next: data => {
//             alert('Xoá thành công!');
//             location.reload();
//         },
//         error: error => {
//             this.errorMessage = error.message;
//             console.error('There was an error!', error);
//         }
//     });
//   }
// }
// deleteSingleSubject(id_cr){
//   if(confirm("Bạn có chắc chắn muốn xoá lớp đã đăng kí này?")) {
//     this._http.delete('https://localhost:44351/api/ClassRegisters/'+id_cr)
//     .subscribe({
//         next: data => {
//             alert('Xoá thành công!');
//             location.reload();
//         },
//         error: error => {
//             this.errorMessage = error.message;
//             console.error('There was an error!', error);
//         }
//     });
//   }
// }
 
}
