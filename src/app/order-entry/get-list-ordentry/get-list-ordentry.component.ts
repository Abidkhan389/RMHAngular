import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { OrderEntryGetList } from 'src/app/Models/OrderEntry/OrderEntryGetList';
import { OrderEntryService } from 'src/app/Services/order-entry.service';

@Component({
  selector: 'app-get-list-ordentry',
  templateUrl: './get-list-ordentry.component.html',
  styleUrls: ['./get-list-ordentry.component.css']
})
export class GetListOrdentryComponent implements OnInit {
  orderentrylist:OrderEntryGetList;
  showResult:boolean;
  constructor(private OrdrEtryservice:OrderEntryService,public bsModalRef: BsModalRef) {
    this.orderentrylist=new OrderEntryGetList();
    this.showResult=false;
   }
   public orderList:any=[];

  ngOnInit(): void {
  }
  OnInput(val1,val2,val3,val4){
    this.orderentrylist.pageNumber=val1;
    this.orderentrylist.pageSize=val2;
    this.orderentrylist.orderid=val3;
    this.orderentrylist.ItemId=val4;
   // debugger;
    this.OrdrEtryservice.GetListOrderEntry(this.orderentrylist).subscribe((data:any)=>{
      debugger;
      this.orderList=data;
      this.showResult=true;
    });
  }
  

}
