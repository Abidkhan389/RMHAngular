import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { OrderEntryService } from 'src/app/Services/order-entry.service';

@Component({
  selector: 'app-delete-ordentry',
  templateUrl: './delete-ordentry.component.html',
  styleUrls: ['./delete-ordentry.component.css']
})
export class DeleteOrdentryComponent implements OnInit {
  orderEntryList:any;
  showResult:boolean;
  constructor(private OrderEntryservice:OrderEntryService,public bsModalRef: BsModalRef) { 
    this.showResult=false;
  }

  ngOnInit(): void {
  }
  
  OnInput(val:any){
    this.OrderEntryservice.DeleteOrderEntry(val).subscribe((data:any)=>{
      this.orderEntryList=data;
      this.showResult=true;
    });
  }
}
