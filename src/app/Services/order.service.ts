import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { OrderCreate } from '../Models/Order/CreateOrder';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private headers:HttpHeaders;
  readonly ApiUrl="https://localhost:44383/";
  constructor(private http : HttpClient) { 
    this.headers= new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }
  OrderAll():Observable<any[]>{
    return this.http.get<any>(`${this.ApiUrl}Order/All`,{headers: this.headers});
  }
  createorder(order_create: OrderCreate){
    return this.http.post(`${this.ApiUrl}Order/Create`,order_create,{headers:this.headers});
  }
}
