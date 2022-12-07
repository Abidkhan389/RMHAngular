import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Create_OrderEntry } from 'src/app/Models/OrderEntry/OrderEntryCreate';
import { OrderEntryService } from 'src/app/Services/order-entry.service';
@Component({
  selector: 'app-add-ordentry',
  templateUrl: './add-ordentry.component.html',
  styleUrls: ['./add-ordentry.component.css']
})
export class AddOrdentryComponent implements OnInit {
  OrderEntry_create_Form:FormGroup;
  OrderEntry_Create:Create_OrderEntry;
  showAlert:boolean;
  showAlertMessage:string;
  result:any;
  constructor(private toastr: ToastrService, public OrderEntryservice : OrderEntryService ,private router: Router) {
    this.showAlert=false;
    this.OrderEntry_Create= new Create_OrderEntry();
    this.OrderEntry_create_Form= new FormGroup({});
   }

  ngOnInit(): void {
    this.OrderEntry_create_Form= new FormGroup({
      Cost:new FormControl(),
      StoreId:new FormControl(),
      OrderId: new FormControl(),
      ItemId: new FormControl(),
      FullPrice: new  FormControl(),
      PriceSource:new FormControl(),
      Price: new FormControl(),
      QuantityOnOrder: new FormControl(),
      SalesRepId: new FormControl(),
      Taxable: new FormControl(),
      DetailId:new FormControl(),
      Description: new FormControl(),
      QuantityRtd: new FormControl(),
      LastUpdated: new FormControl(),
      Comment: new FormControl(),
      DiscountReasonCodeId: new FormControl(),
      ReturnReasonCodeId: new FormControl(),
      TaxChangeReasonCodeId: new FormControl(),
      TransactionTime: new FormControl(),
      IsAddMoney: new FormControl(),
      VoucherId: new FormControl()
    });
  }
  onCreateSubmit(){
    this.OrderEntry_Create= this.OrderEntry_create_Form.value;
    debugger;
    this.OrderEntryservice.CreateOrderEntry(this.OrderEntry_Create).subscribe((data:any)=>{
      debugger;
      this.result=data;
      if(this.result.isError)
      {
        this.toastr.error(this.result.message);
      }
      else{
        this.toastr.success(this.result.message);
      }
    });
  }
  closeClick(){
    this.router.navigate(['/orderentry']);
  }
}


