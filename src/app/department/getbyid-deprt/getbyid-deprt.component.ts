import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-getbyid-deprt',
  templateUrl: './getbyid-deprt.component.html',
  styleUrls: ['./getbyid-deprt.component.css']
})
export class GetbyidDeprtComponent implements OnInit {
  title:string;
  DepartmentList:any=[];
  deptId:number;
  showResult:boolean;
  departmentId:number=0;
  constructor(private sharedService:SharedService,public bsModalRef: BsModalRef) { 
    this.showResult=false;
    this.title="Get By ID";
  }

  ngOnInit(): void {
  }
  OnInput(value){
this.departmentId = value;
this.sharedService.GetDepartment(value).subscribe((data:any)=> 
{
  debugger;
  this.DepartmentList=data
  this.showResult=true;
  });
//this.sharedService.GetDepartment(value).then((data:any)=>this.DepartmentList=data);
 //debugger;
 //this.DepartmentList = result;

  }  

}
