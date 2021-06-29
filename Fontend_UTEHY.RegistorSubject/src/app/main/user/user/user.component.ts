import { MustMatch } from '../../../helpers/must-match.validator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { FormBuilder, Validators} from '@angular/forms';
import { BaseComponent } from '../../../common/base-component';
declare var $: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  constructor() {}
  ngOnInit() {}
  nguoidungs:any = [
    {
      tenhocphan: 'Tư tưởng HCM',
      tenGV: 'Nguyễn Hữu Đông',
      soTC: 2,
      phuongthuc: 'Offline',
      time: 'Sáng thứ 2,5',
      tuanhoc:'34567',
      phonghoc:'ĐH305',
      trangthai:'not enough',
      sosv: 34
    },
    {
      tenhocphan: 'Toán rời rạc',
      tenGV: 'Nguyễn Hữu Đông',
      soTC: 2,
      phuongthuc: 'Offline',
      time: 'Sáng thứ 2,5',
      tuanhoc:'34567',
      phonghoc:'ĐH305',
      trangthai:'not enough',
      sosv:24
    },
  ];

}
