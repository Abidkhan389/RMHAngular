import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderCreate } from 'src/app/Models/Order/CreateOrder';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  Order_Create_Form:FormGroup;
  CreateOrder:OrderCreate;
  showAlert:boolean;
  result:any;
  showAlertMessage:string;
  settings={
    bigBanner:true,
    timePicker:true,
    format:'yyyy-mm-dd hh:mm a',
    default:false,
    closeOnSelect:false
  };
  constructor( public createorserService:OrderService, private toaster: ToastrService, public fb:FormBuilder,private router: Router) {
    this.showAlert=false;
    this.Order_Create_Form=new FormGroup({});
    this.CreateOrder=new OrderCreate();
   }

  ngOnInit(): void {
    this.Order_Create_Form= this.fb.group({
      StoreID:[''],
      ID:[''],
      closed:[''],
      Time:[''],
      Type:[''],
      Comment:[''],
      CustomerID:[''],
      ShipToId:[''], depositOverride:[''], deposit:[''], tax:[''],
      total:[''], lastUpdated:[''], expirationOrDueDate:[''], taxable:[''],
      salesRepId:[''], referenceNumber:[''], shippingChargeOnOrder:[''], shippingChargeOverride:[''],
      shippingServiceId:[''], shippingTrackingNumber:[''], shippingNotes:[''], reasonCodeId:[''],exchangeId:[''],
      channelType:[''],defaultDiscountReasonCodeId:[''],defaultReturnReasonCodeId:[''],defaultTaxChangeReasonCodeId:['']
    });
  }
  onCreateSubmit(){
    this.CreateOrder=this.Order_Create_Form.value;
    debugger;
    this.createorserService.createorder(this.CreateOrder).subscribe((data:any)=>{
      this.result=data;
      if(this.result.isError)
      {
        this.toaster.error(this.result.message);
      }
      else{
        this.toaster.success(this.result.message);
      }
    });
  }
  closeClick(){
    this.router.navigate(['/Order']);
  }
}
