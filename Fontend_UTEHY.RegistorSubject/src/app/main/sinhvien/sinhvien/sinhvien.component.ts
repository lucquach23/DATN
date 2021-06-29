import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  {ExportService} from '../../../_services/export.service';
import {QuanTriAPI} from '../../../api-service/quantriapi';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.css'],
  providers:[QuanTriAPI]
})
export class SinhvienComponent implements OnInit {

  constructor(private _http:HttpClient,private ex:ExportService) { }
  
  ngOnInit(): void {
    
  }
  
  exprot()
  {
    //this.ex.exportExcel(this.list_tb_dsl,'data');
  }
}