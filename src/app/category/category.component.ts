import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { CategoryserviceService } from '../Services/categoryservice.service';
import { CreateCagtComponent } from './create-cagt/create-cagt.component';
import { DeleteCagtComponent } from './delete-cagt/delete-cagt.component';
import { GetbyidCagtComponent } from './getbyid-cagt/getbyid-cagt.component';
import { ListCagtComponent } from './list-cagt/list-cagt.component';
import { ShowDeleteCatgComponent } from './show-delete-catg/show-delete-catg.component';
import { UpdateCagtComponent } from './update-cagt/update-cagt.component';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  bsModalRef: BsModalRef;

  constructor() { }
 


  ngOnInit(): void {
   
  }
  

  // GetById()
  // {
  //   this.bsModalRef = this.modalService.show(GetbyidCagtComponent,{animated:true,
  //     backdrop:'static',class: 'modal-lg'});
  // }
  // Delete(){
  //   this.bsModalRef=this.modalService.show(DeleteCagtComponent,{animated:true,
  //     backdrop:'static',class: 'modal-lg'});
  //   }
  // List()
  // {
  //   this.bsModalRef=this.modalService.show(ListCagtComponent,{animated:true,
  //     backdrop:'static',class: 'modal-lg'});
  // }
  // GetList(){
  //   this.bsModalRef=this.modalService.show(ShowDeleteCatgComponent,{animated:true,   
  //     backdrop:'static',class: 'modal-lg'});
  // }
  // Create(){
  //   debugger;
  //   this.bsModalRef= this.modalService.show(CreateCagtComponent,{animated:true,
  //     backdrop:'static',class: 'modal-lg'});
  // }
  // Update(){
  //   this.bsModalRef= this.modalService.show(UpdateCagtComponent,{animated:true,
  //   backdrop:'static',class: 'modal-lg'});

  // }
 
}
