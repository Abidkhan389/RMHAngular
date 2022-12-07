import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CategoryserviceService } from 'src/app/Services/categoryservice.service';

@Component({
  selector: 'app-getbyid-cagt',
  templateUrl: './getbyid-cagt.component.html',
  styleUrls: ['./getbyid-cagt.component.css']
})
export class GetbyidCagtComponent implements OnInit {
  CtegoryList:any=[];
  showResult:boolean;
  constructor(private Categoryservice:CategoryserviceService,public bsModalRef: BsModalRef) {
    this.showResult=false;
   }

  ngOnInit(): void {
  }
  OnInput(value){
   
    this.Categoryservice.GetCategory(value).subscribe((data:any)=> 
    {
      debugger;
      this.CtegoryList=data
      this.showResult=true;
      });
    }  

}
