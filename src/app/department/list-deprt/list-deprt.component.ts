import { Component, OnInit,TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-list-deprt',
  templateUrl: './list-deprt.component.html',
  styleUrls: ['./list-deprt.component.css']
})
export class ListDeprtComponent implements OnInit {
  departmentList:any=[];
  showResult:boolean;
  modalRef: BsModalRef;
  message:string;
  totalRecords:string;
  page:number=1;
  showpagenumber:boolean;
  constructor(private sharedService:SharedService,private router: Router,
    private modalService: BsModalService) {
    
    this.showResult=false;
    this.showpagenumber=false;
   }
  ngOnInit(): void {
    this.AllDepartmentlist();
  }
   CreateClick(){
    this.router.navigate(['/CreateDepartment']); 
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  confrim(val:number){
    this.message='Confirmed!';
    this.sharedService.DeleteDepartment(val).subscribe((data:any)=>{
      this.modalRef.hide();
      this.ngOnInit();
    });
  }
  decline(){
    this.message='Declined!';
    this.modalRef.hide();
  }
  AllDepartmentlist(){
    this.sharedService.DepartmentAll().subscribe((data:any)=> {
      debugger;
      this.showResult=true;
      this.departmentList=data;
      this.totalRecords=data.length;
      this.showpagenumber=true;
    });
  }
  // OnInput(val1,val2)
  // {
  //   this.sharedService.ListDepartment(val1,val2).subscribe((data:any)=>{
  //    debugger;  
  //     this.departmentList=data;
  //     this.showResult=true;
  //   });
  // }

}
