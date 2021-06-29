import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../lib/authentication.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import {NguoiDungAPI} from '../api-service/nguoidungapi'
import { stringify } from '@angular/compiler/src/util';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
declare var Email: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private _http:HttpClient
    ) {
    // redirect to home if already logged in
    if (this.authenticationService.userValue) {
      this.router.navigate(['/']);
    }
    
  }
  
  ngOnInit(): void {

    
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    // get return url from route parameters or default to '/'
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.returnUrl = this.route.snapshot.queryParams['/'] || '/'||'register-sv'||'register-gv';

  }

  layttsv(){
    var me=this;
    var msv=$('#ip_masv').val();
    if(!msv) $('#ip_masv').css('border','1px solid red');
    else {
      $('#ip_masv').css('border','1px solid green');
      this._http.get<any[]>(`https://localhost:44387/api/NguoiDung/LayTTSV/${msv}`).subscribe((res:any)=>{
        if(res.length==0) $('#showdatasv').append(`Không tìm thấy sinh viên có mã: ${msv}`);
        else{$('#showdatasv').empty();
        $('#showdatasv').append(`
          <b>Mã sinh viên</b> : ${res[0]['maSinhVien']}<br>
          <b>Họ tên</b>: ${res[0]['tenSinhVien']}<br>
          <b>Lớp</b>: ${res[0]['maLop']}<br>
          <b>Mail</b>: ${res[0]['email']}<br>
        `);
        $('#btnLayLaiMK').removeAttr('disabled');
        $('#btnLayLaiMK').on('click',function(){
          me.sendMail(msv,res[0]['email'])
        })
      }
      console.log(res)
      })
    }
   
  }
   randomPass(length) {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
      charactersLength)));
    }
   return result.join('');
  }
  sendMail(masinhvien,emailden){
    var pas=this.randomPass(5);
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "hoangluc1002@gmail.com",
      Password : "9C70D39BA04244FF01DD3C39992F94939EB9",
      To : emailden,
      From : "hoangluc1002@gmail.com",
      Subject : "FIT-UTEHY",
      Body : `Mật khẩu đăng nhập mới của bạn là: ${pas}`
  }).then((message)=>{
    if(message==='OK'){
      alert(message);
      this._http.put<any[]>('https://localhost:44387/api/NguoiDung/DoiMatKhau',{
        "maSinhVien": masinhvien,
        "password": pas,
       }).subscribe((res:any)=>{
         console.log(res)
       })
    }
  });
  
}

 






















  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService
      .login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        (data) => {
          console.log(data.role);
          if(data.role=='Gv')
          {
            this.router.navigate(['register-gv']);
          }
          if(data.role=='sv')
          {
            this.router.navigate(['register-sv']);
          }
          if(data.role=='admin')
          {
            this.router.navigate(['admin']);
          }
          //this.router.navigate([this.returnUrl]);
        },
        (error) => {
          this.error = error;
          this.loading = false;   
          alert('Sai tên đăng nhập hoặc mật khẩu!')
          //debugger;     
        }
      );
  }
}
