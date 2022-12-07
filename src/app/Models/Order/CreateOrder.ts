import { MatDatetimePickerInputEvent } from "@angular-material-components/datetime-picker";
import { Time } from "@angular/common";

export class OrderCreate{
    StoreId:number;
    Closed:boolean;
    Time:Date=new Date();
    Type:number;
    Comment:string;
    CustomerId:number;
    ShipToId:number;
    DepositOverride:boolean;
    Deposit:number;
    Tax:number;
    Total:number;
    LastUpdated:Date;
    ExpirationOrDueDate:Date;
    Taxable:boolean;
    SalesRepId:number;
    ReferenceNumber:string;
    ShippingChargeOnOrder:number;
    ShippingChargeOverride:boolean;
    ShippingServiceId:number;
    ShippingTrackingNumber:string;
    ShippingNotes:string;
    ReasonCodeId:number;
    ExchangeId:number;
    ChannelType:number;
    DefaultDiscountReasonCodeId:number;
    DefaultReturnReasonCodeId:number;
    DefaultTaxChangeReasonCodeId:number;
}