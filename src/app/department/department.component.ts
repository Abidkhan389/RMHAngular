import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { AddEditDeprtComponent } from './add-edit-deprt/add-edit-deprt.component';
import { DeleteDeprtComponent } from './delete-deprt/delete-deprt.component';
import {GetbyidDeprtComponent} from "./getbyid-deprt/getbyid-deprt.component";
import { ListDeprtComponent } from './list-deprt/list-deprt.component';
import { ShowDeleteDeprtComponent } from './show-delete-deprt/show-delete-deprt.component';
import { UpdateDeprtComponent } from './update-deprt/update-deprt.component';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  // GetById()
  // {
  //   this.bsModalRef = this.modalService.show(GetbyidDeprtComponent,{animated:true,
  //     backdrop:'static',class: 'modal-lg'});
  // }
  // Delete()
  // {
  //   this.bsModalRef= this.modalService.show(DeleteDeprtComponent,{animated:true,
  //     backdrop:'static',class: 'modal-lg'});
  // }
  // List()
  // {
  //   this.bsModalRef=this.modalService.show(ListDeprtComponent,{animated:true,
  //     backdrop:'static',class: 'modal-lg'});
  // }
  // GetList()
  // {
  //   this.bsModalRef=this.modalService.show(ShowDeleteDeprtComponent,{animated:true,
  //     backdrop:'static',class: 'modal-lg'});
  // }
  // Update()
  // {
  //   this.bsModalRef=this.modalService.show(UpdateDeprtComponent,{animated:true,
  //     backdrop:'static',class: 'modal-lg'});
  // }
  // Create()
  // {
  //   this.bsModalRef= this.modalService.show(AddEditDeprtComponent,{animated:true,
  //     backdrop:'static',class: 'modal-lg'});
  //   //this.bsModalRef.setClass('popup-width-height');
  // }
}
