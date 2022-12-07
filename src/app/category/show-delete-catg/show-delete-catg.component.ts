import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CategoryGetList } from 'src/app/Models/Category/Category-GetList';
import { CategoryserviceService } from 'src/app/Services/categoryservice.service';

@Component({
  selector: 'app-show-delete-catg',
  templateUrl: './show-delete-catg.component.html',
  styleUrls: ['./show-delete-catg.component.css']
})
export class ShowDeleteCatgComponent implements OnInit {
   categorygetlist:CategoryGetList;
   showResult:boolean;
  constructor(public bsModalRef: BsModalRef,public Categoryservice:CategoryserviceService) {
    this.showResult=false;
    this.categorygetlist= new CategoryGetList();
   }
   public categoryList:any=[];

  ngOnInit(): void {
  }
  OnInput(pagenum:number, pagesize:number,Name:string,code:string){
    this.categorygetlist.pageNumber=pagenum;
    this.categorygetlist.pageSize=pagesize;
    this.categorygetlist.Name=Name;
    this.categorygetlist.Code=code;
    debugger;
    this.Categoryservice.GetListCategory(this.categorygetlist).subscribe((data:any)=>{
      debugger;
      this.categoryList=data;
      this.showResult=true;
    });
  }
}
