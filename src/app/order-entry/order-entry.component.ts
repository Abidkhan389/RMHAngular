import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { AddOrdentryComponent } from './add-ordentry/add-ordentry.component';
import { DeleteOrdentryComponent } from './delete-ordentry/delete-ordentry.component';
import { GetByIDOrdentryComponent } from './get-by-id-ordentry/get-by-id-ordentry.component';
import { GetListOrdentryComponent } from './get-list-ordentry/get-list-ordentry.component';
import { ListOrdentryComponent } from './list-ordentry/list-ordentry.component';
import { UpdateOrdentryComponent } from './update-ordentry/update-ordentry.component';
@Component({
  selector: 'app-order-entry',
  templateUrl: './order-entry.component.html',
  styleUrls: ['./order-entry.component.css']
})
export class OrderEntryComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  // GetById()
  // {
  //   this.bsModalRef = this.modalService.show(GetByIDOrdentryComponent,{animated:true,
  //     backdrop:'static',class: 'modal-lg'});
  // }
  // Delete()
  // {
  //   this.bsModalRef= this.modalService.show(DeleteOrdentryComponent,{animated:true,
  //     backdrop:'static',class: 'modal-lg'});
  // }
  // List()
  // {
  //   this.bsModalRef=this.modalService.show(ListOrdentryComponent,{animated:true,
  //     backdrop:'static',class: 'modal-lg'});
  // }
  // GetList()
  // {
  //   this.bsModalRef=this.modalService.show(GetListOrdentryComponent,{animated:true,
  //     backdrop:'static',class: 'modal-lg'});
  // }
  // Update()
  // {
  //   this.bsModalRef=this.modalService.show(UpdateOrdentryComponent,{animated:true,
  //     backdrop:'static',class: 'modal-lg'});
  // }
  // Create()
  // {
  //   this.bsModalRef= this.modalService.show(AddOrdentryComponent,{animated:true,
  //     backdrop:'static',class: 'modal-lg'});
  // }
}
