import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import {Department_List} from './Models/Department/Department-List';
import { Department_GetList } from './Models/Department/Department-GetList';
import { Update_department } from './Models/Department/Department-Update';
import { Department_Create } from './Models/Department/Department-Create';
//import {Department_GetList} from './Models/Department/Department-GetList';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  Depart_Create:Department_Create;
  updatedeprt:Update_department;
  departList:Department_List;
  GetListDepart:Department_GetList;
  private headers: HttpHeaders;
  readonly ApiUrl="https://localhost:44383/";
  constructor(private http:HttpClient) { 
    this.departList=new Department_List();
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'}); 
  }
 
  //#region  DepartmentCrud
  DepartmentAll():Observable<any[]>{
    return this.http.get<any>(`${this.ApiUrl}department/All`,{headers: this.headers});
  }
  ListDepartment(pagenum:number,pageSize:number):Observable<any>{
    debugger;
    this.departList.pageNumber=pagenum;
    this.departList.pageSize = pageSize;
    let params = new HttpParams();
    params = params.append('pageNumber', pagenum);
    params = params.append('pageSize', pageSize);
    return this.http.get<any>(`${this.ApiUrl}department/List`, {params:params , headers: this.headers});
  }
  GetListDepartment(deptList:Department_GetList):Observable<any[]>{
    return this.http.post<any>(`${this.ApiUrl}department/GetList?`,deptList,  {headers: this.headers});
   }
   GetDepartment(val:any): Observable<any>{

    var result= this.http.get<any>(`${this.ApiUrl}department/GetByid?SearchById=${val}`, {headers: this.headers});
    debugger;
    //console.log(result);
    return result;
  }
  DeleteDepartment(val:any):Observable<any>{
    var result= this.http.delete<any>(`${this.ApiUrl}department/Delete?SearchById=${val}`,{headers:this.headers});
    return result;
  }
  AddDepartment(Depart_Create:Department_Create){
    return this.http.post(`${this.ApiUrl}Department/Create`,Depart_Create,{headers:this.headers})
  }
  UpdateDepartment(id:number,updatedeprt:Update_department){
    debugger;
   
    var result= this.http.put(`${this.ApiUrl}Department/Update/${id}`,updatedeprt,{headers:this.headers})
    
     return result;
  }
  

}
