import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { OrderEntryService } from 'src/app/Services/order-entry.service';

@Component({
  selector: 'app-get-by-id-ordentry',
  templateUrl: './get-by-id-ordentry.component.html',
  styleUrls: ['./get-by-id-ordentry.component.css']
})
export class GetByIDOrdentryComponent implements OnInit {
  OrderEntryList:any=[];
  showResult:boolean;
  result:any;
  constructor(private OrderEntryservice:OrderEntryService,public bsModalRef: BsModalRef) { 
    this.showResult=false;
  }

  ngOnInit(): void {
  }
  OnInput(value){
   
    this.OrderEntryservice.GetbyIDOrderEntry(value).subscribe((data:any)=> 
    {
      debugger;
      this.result=data;
      this.OrderEntryList=data;
      this.showResult=true;
    });
  }  

}
