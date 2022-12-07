import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SharedService } from 'src/app/shared.service';
import {Department_GetList} from '../../Models/Department/Department-GetList';
@Component({
  selector: 'app-show-delete-deprt',
  templateUrl: './show-delete-deprt.component.html',
  styleUrls: ['./show-delete-deprt.component.css']
})
export class ShowDeleteDeprtComponent implements OnInit {
  deptList:Department_GetList;
  showResult:boolean;
  constructor(private sharedService:SharedService,public bsModalRef: BsModalRef) { 
    this.deptList= new Department_GetList();
    this.showResult=false;
  }
  public departmentList:any=[];
  
  ngOnInit(): void {
   
  }
  OnInput(val1,val2,val3,val4){
    this.deptList.pageNumber=val1;
    this.deptList.pageSize=val2;
    this.deptList.Name=val3;
    this.deptList.Code=val4;
    this.sharedService.GetListDepartment(this.deptList).subscribe((data:any)=>{
      //debugger;  
       this.departmentList=data;
       this.showResult=true;
     });
  }
  
}
