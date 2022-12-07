import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { OrderEntryService } from 'src/app/Services/order-entry.service';

@Component({
  selector: 'app-list-ordentry',
  templateUrl: './list-ordentry.component.html',
  styleUrls: ['./list-ordentry.component.css']
})
export class ListOrdentryComponent implements OnInit {
   orderentryList:any=[];
  showResult:boolean;
  constructor(public orderentryservice:OrderEntryService , private router :Router) { 
    this.showResult=false;
  }
  ngOnInit(): void {
    this.Allcategorylist();
  }
  CreateClick(){
   this.router.navigate(['/CreateOrderEntry']);
   
  }
  Allcategorylist()
  {
    this.orderentryservice.OrderEntryAll().subscribe((data:any)=> {
      debugger;
      this.showResult=true;
      this.orderentryList=data;
      
    });
  }

  // OnInput(val1,val2)
  // {
  //   this.orderentryservice.ListOrderEntry(val1,val2).subscribe((data:any)=>{
  //    debugger;  
  //     this.orderentryList=data;
  //     this.showResult=true;
  //   });
  // }
  
}
