import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {
  OrderList:any=[];
  showResult:boolean;
  showpagenumber:boolean;
  constructor(private orderserivce:OrderService,private router: Router) { 
    this.showResult=false;
    this.showpagenumber=false;
  }
  ngOnInit(): void {
    this.GetOrderList();
  }
  CreateClick(){
    this.router.navigate(['/CreateOrder']);
  }
  GetOrderList(){
    this.orderserivce.OrderAll().subscribe((data:any)=>{
      this.showResult=true;
      this.OrderList=data;
      this.showpagenumber=true;
    });
  }
}
