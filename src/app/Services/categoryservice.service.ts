import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryList } from '../Models/Category/Category_List';
import { CategoryGetList } from '../Models/Category/Category-GetList';
import { Category_create } from '../Models/Category/Category_create';
import { updatecategory } from '../Models/Category/CategoryUpdate';
@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {
  
   categorylist:CategoryList;
  private headers: HttpHeaders;
  readonly ApiUrl="https://localhost:44383/";
  constructor(private http:HttpClient) { 
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});   
    this.categorylist=new CategoryList();
  }
  categoryAll():Observable<any[]>{
    return this.http.get<any>(`${this.ApiUrl}Category/All`,{headers: this.headers});
   
  }
  GetCategory(val:any): Observable<any>{

    var result= this.http.get<any>(`${this.ApiUrl}Category/GetByID?Id=${val}`, {headers: this.headers});
    debugger;
    return result;
  }
  DeleteCategory(val:any):Observable<any>{
    return this.http.delete<any>(`${this.ApiUrl}Category/Delete?ID=${val}`, {headers:this.headers});
  }
  ListCategopry(pageNumber:number,pageSize:number){
    this.categorylist.pageNumber=pageNumber;
    this.categorylist.pageSize=pageSize;
    let params= new HttpParams();
    params=params.append('pageNumber',pageNumber);
    params=params.append('pageSize',pageSize);
    return this.http.get<any>(`${this.ApiUrl}Category/List`, {params:params , headers: this.headers});
  }
 
  GetListCategory(catgList:CategoryGetList):Observable<any[]>{
    return this.http.post<any>(`${this.ApiUrl}Category/GetList?`,catgList,{headers: this.headers});
   }
  AddCategory(category_Create:Category_create){
    return this.http.post(`${this.ApiUrl}Category/Create`,category_Create,{headers:this.headers})
  }

  Updatecategory(id,upcategory:updatecategory){
    debugger;
   
    var result= this.http.put(`${this.ApiUrl}Category/Update/${id}`,upcategory,{headers:this.headers})
    
     return result;
  }
  // Updatecategory(id:number,categorydeprt:Category_create){
  //   debugger;
   
  //   var result= this.http.put(`${this.ApiUrl}Category/Update/${id}`,categorydeprt,{headers:this.headers})
    
  //    return result;
  // }
 
  
  
}
