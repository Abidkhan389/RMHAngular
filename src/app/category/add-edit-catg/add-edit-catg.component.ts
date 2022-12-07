import { Component, OnInit,TemplateRef } from '@angular/core';
import { CategoryserviceService } from 'src/app/Services/categoryservice.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-edit-catg',
  templateUrl: './add-edit-catg.component.html',
  styleUrls: ['./add-edit-catg.component.css']
})
export class AddEditCatgComponent implements OnInit {
  showResult:boolean;
  AllList:any=[];
  popoverTitle:string;
  popoverMessage:string;
  confirmClicked:boolean;
  cancelClicked:boolean;
  modalRef: BsModalRef;
  message:string;
  totalRecords:string;
  page:number=1;
  showpagenumber:boolean;
  constructor(public categoryservice:CategoryserviceService,
    private router: Router,private modalService: BsModalService) {
    this.showResult=false;
    this.popoverTitle="popoverTitle";
    this.popoverMessage="popoverMessage";
    this.confirmClicked=false;
    this.cancelClicked=false;
    this.showpagenumber=false;
   }
  ngOnInit(): void {
     this.Allcategorylist();
     //this.showpagenumber=true;

  }
  CreateClick(){
    this.router.navigate(['/CreateCategory']);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  confirm(val:number): void {
    this.message = 'Confirmed!';
    this.categoryservice.DeleteCategory(val).subscribe((data:any)=>{
    this.modalRef.hide();
    this.ngOnInit();
    });
  }
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }




  Allcategorylist(){

    this.categoryservice.categoryAll().subscribe((data:any)=> {
      debugger;
      this.showResult=true;
      this.AllList=data;
      this.totalRecords=data.length;
       this.showpagenumber=true;
    });
  }
}
