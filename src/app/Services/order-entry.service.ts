import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { OrderEntryGetList } from '../Models/OrderEntry/OrderEntryGetList';
import { Create_OrderEntry } from '../Models/OrderEntry/OrderEntryCreate';

import { CreateOrderEntrylist } from '../Models/OrderEntry/OrderEntrylist_Create';
@Injectable({
  providedIn: 'root'
})
export class OrderEntryService {
  private headers: HttpHeaders;
  readonly ApiUrl="https://localhost:44383/";
  OrderEntryList:CreateOrderEntrylist; 
  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});   
  
   }
   OrderEntryAll():Observable<any[]>{
    return this.http.get<any>(`${this.ApiUrl}OrderEntry/All`,{headers: this.headers});
  }
  GetbyIDOrderEntry(val:any): Observable<any>{

    var result= this.http.get<any>(`${this.ApiUrl}OrderEntry/GetByID?Id=${val}`, {headers: this.headers});
    debugger;
    return result;
  }
  DeleteOrderEntry(val:any):Observable<any>{
    return this.http.delete<any>(`${this.ApiUrl}OrderEntry/Delete?model=${val}`,{headers:this.headers});
  }
  ListOrderEntry(pageNumber:number,pageSize:number){
    this.OrderEntryList.pageNumber=pageNumber;
    this.OrderEntryList.pageSize=pageSize;
    let params= new HttpParams();
    params=params.append('pageNumber',pageNumber);
    params=params.append('pageSize',pageSize);
    return this.http.get<any>(`${this.ApiUrl}OrderEntry/List`,{params:params,headers:this.headers});
  }
  GetListOrderEntry(orderentrylist:OrderEntryGetList):Observable<any[]>{
    return this.http.post<any>(`${this.ApiUrl}OrderEntry/GetList?`,orderentrylist,{headers:this.headers});
  } 
  CreateOrderEntry(OrderEntry_Create:Create_OrderEntry){
    return this.http.post(`${this.ApiUrl}OrderEntry/Create`,OrderEntry_Create,{headers:this.headers});
  }
  
}
