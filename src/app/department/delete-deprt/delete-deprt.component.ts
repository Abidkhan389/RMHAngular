import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-delete-deprt',
  templateUrl: './delete-deprt.component.html',
  styleUrls: ['./delete-deprt.component.css']
})
export class DeleteDeprtComponent implements OnInit {
  DepartmentList:any=[];
  showResult:boolean;
  constructor(private sharedService:SharedService,public bsModalRef: BsModalRef) { 
    this.showResult=false;
  }

  ngOnInit(): void {
  }
  OnInput(value){
    this.sharedService.DeleteDepartment(value).subscribe((data:any)=>
    {
      debugger;
      this.DepartmentList=data;
      this.showResult=true;
    });
  }
}
